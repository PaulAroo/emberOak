import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatMoney(amount = 0) {
	const options: Intl.NumberFormatOptions = {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	}

	if (amount % 100 === 0) {
		options.minimumFractionDigits = 0
	}

	const locale = navigator.language
	const formatter = new Intl.NumberFormat(locale, options)

	return formatter.format(amount / 100)
}
