import React, { ChangeEvent, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { SessionType, UserType } from "@/types/auth"
import { Edit3Icon } from "lucide-react"
import { Input } from "@/components/ui/input"

type ImageUploadProps = {
  user: UserType
  session: SessionType
  handleImageUpload?: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

const ImageUpload = ({ user, session, handleImageUpload }: ImageUploadProps) => {
  return (
    <DropdownMenu>
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
          <Label>
            <div className="flex gap-4 justify-center items-center">
              <Edit3Icon />
              <span>Change Avatar</span>
            </div>
            <Input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </Label>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          {/* <Button variant="ghost" className="w-full justify-between" onClick={handleRemove}>
            <div className="flex gap-4 justify-center items-center">
              <XIcon />
              <span>Remove Avatar</span>
            </div>
          </Button> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ImageUpload
