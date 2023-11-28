import { Avatar, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Logo = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 750);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 750);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <Button radius="full" variant={isSmallScreen ? null : 'shadow'} className="bg-transparent  text-white shadow-xl md:h-24 sm:h-20 flex">
                <Avatar color="default" className="md:w-16 md:h-16 sm:w-12 sm:h-12 bg-transparent" src="logo.png" />
            </Button>
        </div>
    )
}

export default Logo