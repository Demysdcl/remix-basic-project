import { z, ZodError } from 'zod'

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export function date(date: Date): string {
  const config: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }

  return new Intl.DateTimeFormat('pt-br', config).format(new Date(date))
}

export const Validator = z.object({
  name: z.string().min(6),
  description: z.string().min(12),
})

export const extractValidationErrors = (error: ZodError) => {
  return error.issues.reduce(function (acc, issue) {
    // @ts-ignore
    acc[issue.path[0]] = issue.message
    return acc
  }, {})
}
