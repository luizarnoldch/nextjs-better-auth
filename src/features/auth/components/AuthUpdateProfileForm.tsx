'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, MailIcon, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthImageUpload from './AuthImageUpload';
import useGetSession from '../hooks/useGetSession';
import useUpdateUser from '../hooks/useUpdateUser';
import useSendVerificationEmail from '../hooks/useSendVerificationEmail';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const allowedIds = ['name', 'image'];

const AuthUpdateProfileForm = () => {
  const { data, isPending, error } = useGetSession();

  const { updateUser } = useUpdateUser();
  const { sendVerificationEmail } = useSendVerificationEmail();

  if (!data || isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user data</div>;
  }

  const { user } = data;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id && !allowedIds.includes(id)) return;
    await updateUser({ [id]: value });
  };

  const handleSendVerificationEmail = async () => {
    await sendVerificationEmail({
      email: user.email,
      callbackURL: '/dashboard',
    });
  };

  return (
    <Card className="w-full max-w-7xl mx-auto">
      <CardContent className="py-2">
        <form className="flex flex-col gap-4">
          <AuthImageUpload userName={user.name} userImage={user.image} />
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
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full"
                  onClick={handleSendVerificationEmail}
                  type="button"
                >
                  <MailIcon className="size-5" />
                </Button>
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
            {formatDistanceToNow(user.createdAt, {
              addSuffix: true,
              locale: es,
            })}
          </div>
          <div className="flex justify-between gap-2 items-center text-sm text-muted-foreground">
            <span>Ultimo cambio de tu información:</span>
            {formatDistanceToNow(user.updatedAt, {
              addSuffix: true,
              locale: es,
            })}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthUpdateProfileForm;
