import { House, User, LogOut } from "lucide-react";
import { MenuContent, MenuListItem } from '../atom/menu';

export default function MyMenu() {
    return (
        <div
            className="
        fixed inset-x-0 
        top-auto bottom-5 
        lg:top-5 lg:bottom-auto 
        flex justify-center z-50
      "
        >
            <MenuContent className="shadow-md border max-w-max rounded-xl">
                <MenuListItem logo={<House />} to="/home"></MenuListItem>
                <MenuListItem logo={<User />} to="/user"></MenuListItem>
                <MenuListItem logo={<LogOut />} to="/logout"></MenuListItem>
            </MenuContent>
        </div>
    );
}
