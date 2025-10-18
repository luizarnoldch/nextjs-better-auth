"use client"

import React, { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { SessionType, UserType } from "@/types/auth"
import { Edit3Icon, XIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { authClient, useSession } from "@/lib/auth-client"
import { toast } from "sonner"
import { convertImageToBase64 } from "@/lib/utils"

type ImageUploadProps = {
  user: UserType
  session: SessionType
}

const ImageUpload = ({ user, session }: ImageUploadProps) => {
  const { refetch } = useSession();
  const [open, setOpen] = useState(false);

  const handleImageRemove = async () => {
    try {
      await authClient.updateUser({ image: null });
      refetch();
      setOpen(false);
    } catch (err) {
      toast.error('Error eliminando imagen');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    console.log('Selected file:', file);

    if (!file) return;
    try {
      const base64Image = await convertImageToBase64(file);
      await authClient.updateUser({ image: base64Image });
      refetch();
      setOpen(false);
    } catch (err) {
      toast.error('Error subiendo imagen');
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-between gap-2">
          <Label htmlFor="image">Imagen (URL)</Label>
          <Avatar className="size-12">
            <AvatarImage src={user.image as string} alt={user.name} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem>
          <div className="flex gap-4 justify-center items-center">
            <Edit3Icon />
            <span>Change Avatar</span>
          </div>
          <Input
            type="file"
            accept="image/*"
            // className="hidden"
            onChange={handleImageUpload}
          />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-between" onClick={handleImageRemove}>
            <div className="flex gap-4 justify-center items-center">
              <XIcon />
              <span>Remove Avatar</span>
            </div>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ImageUpload
