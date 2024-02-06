import Link from 'next/link';
import {HomeIcon, ShoppingBagIcon, InboxIcon, UsersIcon, PresentationChartBarIcon} from '@heroicons/react/24/solid';

export default function SideNav() {
    return (
        <div className="w-full md:w-64">
            <div className="flex flex-col bg-green text-white">
                <div className="flex items-center justify-center h-16">
                    <h1 className="text-2xl mt-10 font-bold">Minha Loja</h1>
                </div>
                <div className="flex mt-10 text-xl text-white flex-col justify-center gap-10 p-4">
                    <Link href="/gerenciador/dashboard">
                        <span className="flex items-center gap-2">
                            <PresentationChartBarIcon width={'30px'} />
                            <span>Dashboard</span>
                        </span>
                    </Link>
                    <Link href="/gerenciador/products">
                        <span className="flex items-center gap-2">
                            <ShoppingBagIcon width={'30px'}  />
                            <span>Produtos</span>
                        </span>
                    </Link>
                    <Link href="/gerenciador/orders">
                        <span className="flex items-center gap-2">
                            <InboxIcon width={'30px'}  />
                            <span>Pedidos</span>
                        </span>
                    </Link>
                    <Link href="/gerenciador/collaborators">
                        <span className="flex items-center gap-2">
                            <UsersIcon width={'30px'}  />
                            <span>Colaboradores</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}