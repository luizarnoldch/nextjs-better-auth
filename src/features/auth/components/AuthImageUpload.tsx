'use client';

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Edit3Icon, XIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { convertImageToBase64 } from '@/lib/utils';
import useUpdateUserImage from '../hooks/useUpdateUserImage';

type AuthImageUploadProps = {
  userName: string;
  userImage: string | null | undefined;
};

const AuthImageUpload = ({ userName, userImage }: AuthImageUploadProps) => {
  const [open, setOpen] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { updateUserImage } = useUpdateUserImage({
    onSuccess: () => {
      setOpen(false);
    },
  });

  const handleEditClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  const handleImageRemove = async () => {
    await updateUserImage({ image: null });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64Image = await convertImageToBase64(file);
    await updateUserImage({ image: base64Image });
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-between gap-2">
          <Label htmlFor="image">Imagen (URL)</Label>
          <Avatar className="size-12">
            <AvatarImage src={userImage as string} alt={userName} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem onClick={handleEditClick} className="cursor-pointer">
          <div className="flex gap-4 justify-center items-center">
            <Edit3Icon />
            <span>Change Avatar</span>
          </div>
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
      <Input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
    </DropdownMenu>
  );
};

export default AuthImageUpload;
