import {
  Dices, Library, User, Users,
} from 'lucide-react';

import { IconPeopleFill } from '../icons/IconPeopleFill';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export function Navbar() {
  const darkModeHandler = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <header className="w-full shadow-gray-500 z-50 inset-x-0 fixed shadow-sm bg-background">
      <div className="w-[640px] mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <IconPeopleFill />
          <div className="flex h-14 items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" onCheckedChange={darkModeHandler} />
              <Label htmlFor="dark-mode">Dark Mode</Label>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Профиль</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Мои игротеки</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Library className="mr-2 h-4 w-4" />
                  <span>Моя коллекция</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Dices className="mr-2 h-4 w-4" />
                  <span>Мои игры</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
