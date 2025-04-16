"use client";

import { ComponentType, ReactNode } from "react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";


interface Props {
    title?: string;
    subTitle?: string;
    icon?: ComponentType<{size?: number}>;
    iconClassName?: string;
    titleClassName?: string,
    subTitleClassName?: string;
}
function CustomDialogHeader(props: Props) {
    const Icon = props.icon;
  return (
    <DialogHeader className="py-6">
        <DialogTitle asChild>
            <div className="flex flex-col items-center gap-2 mb-2">
                {Icon && <div className={props.iconClassName}>
                    <Icon size={30}/>
                </div>}
                {props.title && (
                    <p className={cn("text-xl text-primary", props.titleClassName)}>
                        {props.title}
                    </p>
                )}
                {props.subTitle && (
                    <p className={cn("text-sm text-muted-foreground", props.subTitleClassName)}>
                        {props.subTitle}
                    </p>
                )}
            </div>
        </DialogTitle>
        <Separator />
    </DialogHeader>
  )
}

export default CustomDialogHeader