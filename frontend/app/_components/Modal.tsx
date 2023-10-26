import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({ showModal, setShowModal, children }: ModalProps) {
  return (
    <Transition show={showModal} as={Fragment}>
      <Dialog className="relative z-50" onClose={() => setShowModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out transition duration-300"
            enterFrom="translate-y-[-48px] transform opacity-0"
            enterTo="translate-y-0 transform opacity-100"
            leave="ease-in transition duration-150"
            leaveFrom="translate-y-0 transform opacity-100"
            leaveTo="translate-y-[48px] transform opacity-0"
          >
            <Dialog.Panel className="relative m-3 flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-white p-12 text-primary">
              <button
                type="button"
                className="absolute right-4 top-4"
                onClick={() => setShowModal(false)}
              >
                <IoCloseSharp className="text-2xl text-ternary lg:text-4xl" />
              </button>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
