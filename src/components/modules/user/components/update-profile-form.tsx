"use client"

import { authClient, useSession } from '@/lib/auth-client'
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, XCircle } from "lucide-react"
import { DateProfileFormatter } from "../../shared/date/date-formatter"
import ImageUpload from "./image-upload"
import { toast } from 'sonner'

const allowedIds = ["name", "image"]

type UpdateProfileFormProps = {
}

const UpdateProfileForm = ({ }: UpdateProfileFormProps) => {
  const { data, refetch, isPending, error } = useSession()

  if (!data || isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading user data</div>
  }

  const { user, session } = data

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id && !allowedIds.includes(id)) return;
    try {
      await authClient.updateUser({ [id]: value });
      refetch();
    } catch (err) {
      toast.error('Error actualizando usuario');
    }
  };

  return (
    <Card className="w-full max-w-7xl mx-auto">
      <CardContent className="py-2">
        <form className="flex flex-col gap-4">
          <ImageUpload user={user} session={session} />
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
              onChange={handleChange}
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
