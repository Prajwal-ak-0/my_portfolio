import { Avatar, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Logo = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 750);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <Button radius="full" variant={isSmallScreen ? null : 'shadow'} className="bg-transparent text-white shadow-xl sm:h-24 flex">
                <Avatar color="default" className="sm:w-16 sm:h-16 bg-transparent" src="logo.png" />
            </Button>
        </div>
    )
}

export default Logo