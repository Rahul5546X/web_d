/**
 * 
*/

import type { InputElements } from '../interfaces/interfaces';

function FormElements({ id, name, type, placeHolder }: InputElements) {
   return (
      <>
         <label htmlFor={name}>{name}</label>
         <div>
            {type !== "textarea" &&
               <input
                  type={type}
                  id={id}
                  name={name}
                  placeholder={placeHolder}
                  className=''
               />
            }

            {type === "textarea" &&
               <textarea
                  id={id}
                  name={name}
                  placeholder={placeHolder}
                  className=''
               />
            }
         </div>
      </>
   )
}

export default FormElements;