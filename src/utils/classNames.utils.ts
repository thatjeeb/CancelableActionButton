import { ClassNameConditionals } from "./classNames.definition";

export function getClassName(baseClassName: string, conditionals: ClassNameConditionals[]): string {
  let fullClassName = baseClassName;
  
  conditionals.forEach(c => {
    const { condition, trueClassName, falseClassName} = c;
    if (condition === null || trueClassName === null) return;
    fullClassName += ' ';
    fullClassName += condition ? trueClassName : falseClassName || '';
  });

  return fullClassName;
}