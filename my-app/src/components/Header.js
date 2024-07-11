import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function TopHeader() {
    return (
        <header className="relative top-header bg-primary-500 text-white md:py-2">
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="social text-left order-3 md:order-none pb-2 md:pb-0">
                    <a className="mr-4" href="https://www.facebook.com/share/zEVFrZkBEJmM6WAH/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    {/*<a className="mr-4" href="https://www.facebook.com/share/zEVFrZkBEJmM6WAH/" target="_blank">*/}
                    {/*    <FontAwesomeIcon icon={faTiktok} />*/}
                    {/*</a>*/}
                </div>
                <div className="headline text-center max-w-1/2 mx-auto order-2 md:order-none py-2 md:py-0">
                    <h4 className="text-base md:text-xl"> {/* Adjust text size for different screens */}
                        Experți în pardoseli din rășină epoxidică.
                    </h4>
                </div>
                <div className="contact-info text-right order-1 md:order-none pt-2 md:pt-0">
                    <a className="mr-4" href="tel:+40769972702" target="_blank">
                        0769.972.702
                    </a>
                    <a className="" href="https://wa.me/+40769972702" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </div>
        </header>
    )
}
