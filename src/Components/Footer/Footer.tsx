import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts } from "@/constants";
import "./Footer.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const Footer: FC = () => {
  return (
    <section id="contact">
      <div className="mt-52 lg:px-16 sm:px-8 flex justify-center lg:gap-16 sm:gap-12 gap-8">
        {contacts.map((contact) => {
          return (
            <a key={contact.id} href={contact.url} target="_blank">
              <div className="contact flex flex-col justify-center items-center transition-all duration-300  hover:scale-150">
                {!contact.customIcon ? (
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={contact.icon as IconProp} />
                  </div>
                ) : (
                  <div className="contact-icon">
                    <img
                      src={contact.icon as string}
                      style={{
                        height: "16px",
                        width: "24px",
                        marginBlockStart: "2px",
                      }}
                      alt="contact"
                    />
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
      <div className="copyright lg:text-[12px] text-[10px] text-center mt-8">
        ©Prateek Jha {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default Footer;
