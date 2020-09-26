import React, { useEffect, useRef } from 'react';
import { Spinner } from 'spin.js';

export const XS = 'xs'
export const S = 's'
export const L = 'l'
export const XL = 'xl'

export const SIZES = [XS, S, L, XL] as const

export const CONTRACT = 'contract'
export const CONTRACT_OVERLAY = 'contract-overlay'
export const EXPAND_LEFT = 'expand-left'
export const EXPAND_RIGHT = 'expand-right'
export const EXPAND_UP = 'expand-up'
export const EXPAND_DOWN = 'expand-down'
export const SLIDE_LEFT = 'slide-left'
export const SLIDE_RIGHT = 'slide-right'
export const SLIDE_UP = 'slide-up'
export const SLIDE_DOWN = 'slide-down'
export const ZOOM_IN = 'zoom-in'
export const ZOOM_OUT = 'zoom-out'

export const STYLES = [
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  CONTRACT,
  CONTRACT_OVERLAY,
  ZOOM_IN,
  ZOOM_OUT,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
] as const

export interface LaddaButtonProps {
  className?: string;
  progress?: number;
  loading?: boolean;
  disabled?: boolean;
  'data-color'?: string;
  'data-size'?: typeof SIZES[number];
  'data-style'?: typeof STYLES[number];
  'data-spinner-size'?: number;
  'data-spinner-color'?: string;
  'data-spinner-lines'?: number;
}

export const LaddaButton: React.FC<LaddaButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = React.memo(
  ({className, children, disabled, loading, progress, ...restProps}) => {
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spinner = useRef<Spinner>();
  const timer = useRef<any>();

  useEffect(() => {
    if(loading){
      timer.current && clearTimeout(timer.current);
      const createSpinner = () => {
        var height = buttonRef.current ? buttonRef.current.offsetHeight : 0,
            spinnerColor,
            spinnerLines;
    
        if (height === 0) {
            // We may have an element that is not visible so
            // we attempt to get the height in a different way
            if(buttonRef.current)
              height = parseFloat(window.getComputedStyle(buttonRef.current).height);
        }
    
        // If the button is tall we can afford some padding
        if (height > 32) {
            height *= 0.8;
        }
    
        // Prefer an explicit height if one is defined
        if (restProps["data-spinner-size"]) {
            height = restProps["data-spinner-size"] || 10;
        }
    
        // Allow buttons to specify the color of the spinner element
        if (restProps['data-spinner-color']) {
            spinnerColor = restProps['data-spinner-color'];
        }
    
        // Allow buttons to specify the number of lines of the spinner
        if (restProps['data-spinner-lines']) {
            spinnerLines = restProps['data-spinner-lines'] || 12
        }
    
        var radius = height * 0.2,
            length = radius * 0.6,
            width = radius < 7 ? 2 : 3;
    
        return new Spinner({
            color: spinnerColor || '#fff',
            lines: spinnerLines || 12,
            radius: radius,
            length: length,
            width: width,
            animation: 'ladda-spinner-line-fade',
            top: 'auto',
            left: 'auto',
            className: ''
        });
      }

      if(!spinner.current) spinner.current = createSpinner();
        spinner.current?.spin(buttonRef.current?.querySelector('.ladda-spinner') as HTMLElement||undefined);
    } else{
      if (spinner) {
        //make sure the spinner keeps spinning for the button contracting animation
        const tv = timer.current = setTimeout(function() { spinner.current?.stop(); }, 1000);
        return ()=>clearTimeout(tv);
      }
    }

    //ts doesn't like sometimesy returns
    return undefined;
  }, [loading])

  const dloadingProp = loading ? {'data-loading':''} : {};
  restProps = {...restProps, 'data-style': restProps['data-style'] || EXPAND_LEFT}; //set default data-style

  return (
    <button
      {...dloadingProp}
      {...restProps}
      className={`ladda-button ${className || ''}`}
      ref={buttonRef}
      disabled={disabled || loading}
    >
      <span className="ladda-label">{children}</span>
      <span className="ladda-spinner"></span>
      {progress &&
        <div
          className="ladda-progress"
          style={{width: ((Math.max(Math.min(progress||0, 1), 0)) * (buttonRef.current?.offsetWidth||0)) + 'px'}}>
        </div>
      }
    </button>
  )
});

export default LaddaButton;