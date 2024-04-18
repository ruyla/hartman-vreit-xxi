import { ChangeEventHandler } from "react"
import { ClassificationTypeNames } from "typescript"

export { }

/**
 * type1 is for button elements.
 * type2 is for input elements.
 */
declare global {
    interface IComponent {
        children: React.ReactNode
        className: string
        display: string
        element: 'input' | 'textarea' | string | undefined
        error: string
        htmlFor: string
        id: string
        image: string
        label: string
        link: string
        name: string
        onChange: ChangeEventHandler<HTMLInputElement>
        placeholder: string
        target: 'internal' | 'external' | undefined
        title: string | React.ReactNode
        type1: 'button' | 'submit' | 'reset' | undefined
        type2: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | string | undefined
        value: string | number | undefined
    }
}