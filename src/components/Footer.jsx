import '../index.css';

export default function Footer() {
    return (
        <footer class="bg-[#1c1917] text-fondo/85 font-body-md border-t border-outline/10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 py-16 max-w-container-max mx-auto">
            
                {/* Brand Column */}
                <div class="space-y-6">
                    <h2 class="font-bold text-lg">CulinaryArtisan</h2>
                    <p class="text-background/70 font-body-md">
                        Inspirando a los amantes de la cocina a crear platos excepcionales con ingredientes puros y técnicas profesionales.
                    </p>
                    <div class="flex gap-4">
                        <a class="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all" href="#">
                            <span class="material-symbols-outlined text-lg">public</span>
                        </a>
                        <a class="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all" href="#">
                            <span class="material-symbols-outlined text-lg">camera</span>
                        </a>
                        <a class="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all" href="#">
                            <span class="material-symbols-outlined text-lg">share</span>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div class="space-y-6">
                    <h3 class="font-bold uppercase tracking-widest">Compañía</h3>
                    <ul class="space-y-4">
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">About Us</a></li>
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">Chef Partners</a></li>
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">Careers</a></li>
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">Newsletter</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div class="space-y-6">
                    <h3 class="font-bold uppercase tracking-widest text-background">Soporte</h3>
                    <ul class="space-y-4">
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">Contact</a></li>
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">Privacy Policy</a></li>
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">Terms of Service</a></li>
                        <li><a class="text-fondo/85 hover:text-fondo transition-colors hover:underline decoration-boton underline-offset-4" href="#">Cookie Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div class="space-y-6">
                    <h3 class="font-bold uppercase tracking-widest">Newsletter</h3>
                    <p class="text-background/70">Suscríbete para recibir recetas exclusivas y consejos de chefs.</p>
                    <div class="flex">
                        <input class="bg-white/10 border-none rounded-l-lg py-3 px-4 focus:outline-0 focus:ring-1 focus:ring-amber-500 w-full" placeholder="Email" type="email"/>
                        <button class="bg-boton px-4 rounded-r-lg hover:bg-boton/90 transition-all cursor-pointer">
                            <span class="material-symbols-outlined text-white">send</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="border-t border-fondo/5 px-6 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-background/50 font-label-sm">
                <p>© 2026 CulinaryArtisan. | Hecho por Aldair, Miguel, Jose Funval 2026</p>
            </div>
        </footer>
    )
}