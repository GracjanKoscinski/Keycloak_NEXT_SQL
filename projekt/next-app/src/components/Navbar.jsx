import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth'
import Login from "@/components/Login";
import Logout from "@/components/Logout";
export default async function  Navbar() {
    const session = await getServerSession(authOptions);
    if (session) {
        return (
            <div className="flex justify-between items-center bg-gray-800 text-white p-4">
                <div className="text-2xl"><a href="/" >Next App</a></div>
                <div className="items-center p-2">
                <div className="border border-white rounded-full p-1 m-1 text-center"><a href="/adminPage">Admin Page</a></div>
                <div className="border border-white rounded-full p-1"><Logout /> </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex justify-between items-center bg-gray-800 text-white p-4">
            <div className="text-2xl"><a href="/">Next App</a></div>
            <div className="border border-white rounded-full p-1"><Login /></div>
        </div>
    )
}