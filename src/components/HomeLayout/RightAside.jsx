import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";

const RightAside = () => {
    const { user } = use(AuthContext);

    return (
        <div className="space-y-8">

            {/* Social Login only when user is NOT logged in */}
            {!user && <SocialLogin />}

            {/* Find Us */}
            <FindUs />

            {/* Q Zone */}
            <QZone />

        </div>
    );
};

export default RightAside;