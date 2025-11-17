"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { Languages, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const handleToggle = (newLocale: Locale) => {
    if (newLocale === locale) return;
    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  const locales: { value: Locale; label: string }[] = [
    { value: "en", label: "English" },
    { value: "fa", label: "فارسی" },
    { value: "de", label: "Deutsch" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex items-center justify-center gap-1"
          disabled={isPending}
        >
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {locales.map(({ value, label }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => handleToggle(value)}
            className="flex justify-between cursor-pointer"
          >
            <span>{label}</span>
            {value === locale && (
              <Check className="h-4 w-4 text-primary opacity-80" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
