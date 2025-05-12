import { Button } from "@/components/ui/button";
import { DialogClose, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TechModel } from "@/models/tech-model";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SeparatorHorizontal } from "lucide-react";

export const TechModal = ({title, description, buttonLabel, tech} : {title: string, description: string, buttonLabel: string, tech: string}) => {
  return <>
    <DialogHeader className="border-b-2">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description} <b>{tech}</b></DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-72 w-full rounded-md">
          <div className="grid gap-4 py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
            quaerat incidunt? Nobis, aspernatur fugit porro quibusdam alias
            vitae cumque aut officia laboriosam vel obcaecati tempora a
            consectetur ex dolorem dignissimos consequatur Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Minus ratione quia natus
            assumenda, nostrum nam eveniet perferendis praesentium nemo non?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            facilis sunt totam libero ipsam optio exercitationem maxime qui
            praesentium repudiandae, et voluptates nisi dolorem velit
            consequatur ab itaque, enim tempore deserunt
          </div>
        </ScrollArea>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {buttonLabel}
            </Button>
          </DialogClose>
        </DialogFooter>
  </>;
};
