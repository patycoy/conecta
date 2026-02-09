import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

/*
  Button reutilizable con Tailwind CSS
  - Si se usa `asChild`, renderiza el `Slot` para permitir enlaces u otros wrappers.
  - Si se renderiza directamente, usa un botón HTML estándar con clases Tailwind.
  - Soporta múltiples variantes y tamaños.
*/
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

// Exportar buttonVariants para compatibilidad con otros componentes UI (e.g., alert-dialog)
export const buttonVariants = (props?: {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}) => {
  const variant = props?.variant || 'default'
  const size = props?.size || 'default'

  let classes = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  // Variantes de botón
  if (variant === 'default') {
    classes += ' bg-primary text-primary-foreground hover:bg-primary/90'
  } else if (variant === 'destructive') {
    classes += ' bg-destructive text-destructive-foreground hover:bg-destructive/90'
  } else if (variant === 'outline') {
    classes += ' border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  } else if (variant === 'secondary') {
    classes += ' bg-secondary text-secondary-foreground hover:bg-secondary/80'
  } else if (variant === 'ghost') {
    classes += ' hover:bg-accent hover:text-accent-foreground'
  } else if (variant === 'link') {
    classes += ' text-primary underline-offset-4 hover:underline'
  }

  // Tamaños
  if (size === 'sm') {
    classes += ' h-9 px-3'
  } else if (size === 'default') {
    classes += ' h-10 px-4 py-2'
  } else if (size === 'lg') {
    classes += ' h-11 px-8'
  } else if (size === 'icon') {
    classes += ' h-10 w-10'
  }

  return classes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant = 'default', size = 'default', className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const buttonClasses = buttonVariants({ variant, size })

    return <Comp className={cn(buttonClasses, className)} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button }
