import React from 'react';


const Footer = () => {
    return (

        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 xl:py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex xl:ml-5 mb-6 md:mb-0  gap-40 xl:justify-start">
                        <a href="https://github.com/dmaberlin1" target={'_blank'} className="flex items-center dark:text-white gap-2" rel="noreferrer">
                            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                              dmaberlin
                                            </span>
                            <span className={'mt-1 text-gray-500 dark:text-gray-300'}> client side</span>

                        </a>

                        <a href="https://github.com/Koekto-code" target={'_blank'}
                           className="flex dark:text-white gap-2 items-center"
                           rel="noreferrer">
                            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                            koekto
                                          </span>
                           <span className={'mt-1 text-gray-500 dark:text-gray-300'}> server side</span>
                        </a>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://react.dev/" target={'_blank'} rel={'noreferrer'}  className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="https://www.gnu.org/licenses/agpl-3.0.html" target={'_blank'} rel={'noreferrer'}
                               className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://github.com/dmaberlin1/solo_on_board/blob/master/LICENSE"
                               target={'_blank'} rel="noreferrer" className="mr-4 hover:underline md:mr-6 " >Licensing</a>
                        </li>
                        <li>
                            <a href="https://t.me/javascriptsUkraine" target={'_blank'} rel={'noreferrer'}
                               className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                    href="https://github.com/dmaberlin1/solo_on_board" target={'_blank'} rel={'noreferrer'} className="hover:underline">Solo on Board</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer;
