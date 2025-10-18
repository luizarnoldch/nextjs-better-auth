"use client"

import { useState } from "react"
import { authClient } from '@/lib/auth-client'
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, XCircle } from "lucide-react"
import { SessionType, UserType } from "@/types/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DateProfileFormatter } from "../../shared/date/date-formatter"

const allowedIds = ["name", "image"]

type UpdateProfileFormProps = {
  user: UserType
  session: SessionType
}

const UpdateProfileForm = ({ user, session }: UpdateProfileFormProps) => {

  return (
    <Card className="w-full mx-auto">
      <CardContent className="py-2">
        <form className="flex flex-col gap-4">
          <div>
          </div>
          <div className="flex justify-between gap-2">
            <Label htmlFor="image">Imagen (URL)</Label>
            <Input
              id="image"
              defaultValue={user.image as string}
              // value={form.image}
              // onChange={handleChange}
              placeholder="URL de tu imagen"
              className="max-w-1/3"
            />
            <Avatar className="size-16 rounded-lg">
              <AvatarImage src={user.image as string} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <Label>Email</Label>
            <span className="max-w-1/3">{user.email}</span>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <Label>Verificado</Label>
            {user.emailVerified ? (
              <div className="flex items-center gap-2">
                <span className="sr-only">Verificado</span>
                <CheckCircle2 className="text-green-600" />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="sr-only">No verificado</span>
                <XCircle className="text-destructive" />
              </div>
            )}
          </div>
          <Separator />

          <div className="flex justify-between gap-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <Input
              id="name"
              defaultValue={user.name}
              // value={form.name}
              // onChange={handleChange}
              placeholder="Tu nombre"
              className="max-w-1/3"
            />
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center text-sm text-muted-foreground">
            <span>Te uniste en:</span>
            <DateProfileFormatter date={user.createdAt} />
          </div>
          <div className="flex justify-between gap-2 items-center text-sm text-muted-foreground">
            <span>Ultimo cambio de tu información:</span>
            <DateProfileFormatter date={user.updatedAt} />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default UpdateProfileForm
