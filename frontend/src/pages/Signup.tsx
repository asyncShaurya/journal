import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
import { Link } from "react-router-dom"

export const Signup = () => {
    return (
       <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
            <Link to={'/'}>
              <div className="flex justify-between text-2xl pl-8 px-1 py-6">
                  Journal
              </div>
            </Link>
                <Auth type="signup" />
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </div>
    )
}