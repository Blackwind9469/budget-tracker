import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/app/lib/checkUser";

const Header = async () => {
    const user = await checkUser();
    return (
        <nav className="nav">
            <div className="nav-container">
            <div className="nav-title">
             Budget Tracker
             </div>

             <div>
            <SignedOut>
            <div className="sign-in-button">
            <SignInButton />
             </div>
            </SignedOut>
            <SignedIn>
            <div className="user-button">
            <UserButton />
            </div>
            </SignedIn>
            </div>
            </div>
        </nav>

       /* <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    Budget Tracker
                </div>

                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav> */
    );
};

export default Header;
