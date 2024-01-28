import { SiUpwork, SiMedium } from "react-icons/si";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";

export default function Contact() {
	return (
		<div
			id="contact"
			className="mx-auto bg-white border-4 border-black container h-544 overflow-auto"
		>
			<div className="container mx-auto pt-10 pb-20 text-center">
				<div>
					<h1 className="text-5xl white-text-shadow md:text-6xl font-classic">
						Write to me
					</h1>
					<p className="minimal-text-shadow mt-5 text-sm">
						Get in touch. Let's talk
					</p>
				</div>
				<div>
					<div className="md:bg-gradient-to-bottom p-5 md:p-10 md:shadow-md mx-auto mt-10 max-w-4xl md:max-w-3xl md:rounded-md text-white">
						<form action="https://formspree.io/f/xrgrenzb" method="POST">
							<div className="flex justify-evenly">
								<div className="grid grid-rows-2 grid-flow-col md:grid-cols-2 md:grid-rows-1 gap-4 w-full">
									<div className="contact-element">
										<input
											className="icon-button bg-black placeholder-gray-600 rounded-md p-3 relative w-full lg:w-72 xl:w-81"
											type="text"
											name="Name"
											placeholder="John Doe"
										/>
									</div>
									<div className="contact-element">
										<input
											className="icon-button bg-black placeholder-gray-600 rounded-md p-3 relative w-full lg:w-72 xl:w-81"
											type="email"
											name="Email"
											placeholder="john@doe.com"
										/>
									</div>
								</div>
							</div>
							<div className="mt-5">
								<div className="grid grid-cols-1 grid-flow-row">
									<div className="contact-element">
										<textarea
											rows={4}
											className="icon-button bg-black placeholder-gray-600 rounded-md p-3 w-full lg:w-11/12 xl:w-full"
											type="text"
											name="Message"
											placeholder="Languages are your power & variables your slaves."
										/>
									</div>
								</div>
							</div>
							<div className="flex justify-center mt-5">
								<button
									id="contact-submit"
									type="submit"
									className="icon-button group relative w-full md:w-2/12 py-2 px-4 border border-transparent text-sm font-medium rounded-md  bg-black md:text-white hover:text-gray-200 transition duration-300"
								>
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
				{/* <div className="flex justify-evenly">
          <div className=" grid grid-flow-col grid-rows-1 mx-auto mt-20 gap-4">
            <div>
              <button className="bg-black p-3 rounded-xl text-white text-3xl shadow-lg hover:text-black hover:bg-white transition duration-300">
                <a href="https://github.com/ingeniousambivert" target="_blank">
                  <RiGithubLine />
                </a>
              </button>
            </div>
            <div>
              <button className="bg-black p-3 rounded-xl text-white text-3xl shadow-lg hover:text-black hover:bg-white transition duration-300">
                <a
                  href="https://www.linkedin.com/in/monarchmaisuriya/"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </button>
            </div>
            <div>
              <button className="bg-black p-3 rounded-xl text-white text-3xl shadow-lg hover:text-black hover:bg-white transition duration-300">
                <a href="https://ingeniousambivert.medium.com/" target="_blank">
                  <SiMedium />
                </a>
              </button>
            </div>
            <div>
              <button className="bg-black p-3 rounded-xl text-white text-3xl shadow-lg hover:text-black hover:bg-white transition duration-300">
                <a
                  href="https://www.upwork.com/o/profiles/users/~01434db45df923780a/"
                  target="_blank"
                >
                  <SiUpwork />
                </a>
              </button>
            </div>
          </div>
        </div> */}
			</div>
		</div>
	);
}
