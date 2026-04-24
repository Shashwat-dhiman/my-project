import { MessageCircle, Phone, Mail } from "lucide-react";

const BottomSection = () => {
    return (
        <div className="md:hidden fixed bottom-0 text-white left-0 right-0 flex gap-2 p-3 bg-[#0f1f3d]">

            <button className="flex-1 flex items-center justify-center gap-2 border border-white rounded-md py-2 text-sm">
                <MessageCircle size={16} />
                Chat
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 border border-white bg-green-500 rounded-md py-2 text-sm">
                <Phone size={16} />
                Talk Now
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 border border-white rounded-md py-2 text-sm">
                <Mail size={16} />
                Email
            </button>

        </div>
    )
}

export default BottomSection;