import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MessageSquare, Phone, Mail } from "lucide-react";

export default function ContactsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.8]">
                Контакты
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Расскажите о вашем проекте — мы предложим формат съёмки и смету
                в течение 24 часов.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                      Email
                    </span>
                    <span className="font-bold">hello@axisvisuals.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                      Телефон
                    </span>
                    <span className="font-bold">+998 90 123 45 67</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                      Telegram
                    </span>
                    <span className="font-bold">@axisvisuals_prod</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 md:p-12 rounded-[2.5rem] border border-border/50">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold ml-1">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-background border-none h-14 rounded-2xl px-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold ml-1">
                      Компания
                    </label>
                    <Input
                      placeholder="Название компании"
                      className="bg-background border-none h-14 rounded-2xl px-6"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold ml-1">
                    Контакт (Email / TG)
                  </label>
                  <Input
                    placeholder="Как с вами связаться?"
                    className="bg-background border-none h-14 rounded-2xl px-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold ml-1">
                    Тип проекта
                  </label>
                  <select className="w-full bg-background border-none h-14 rounded-2xl px-6 text-sm outline-none appearance-none cursor-pointer">
                    <option>Видео-продакшн</option>
                    <option>Фото-съемка</option>
                    <option>3D / CGI проект</option>
                    <option>Reels Production</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold ml-1">
                    Описание проекта
                  </label>
                  <Textarea
                    placeholder="Кратко о вашей идее"
                    className="bg-background border-none min-h-[120px] rounded-2xl p-6 resize-none"
                  />
                </div>
                <Button className="w-full h-16 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] group">
                  Отправить запрос
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
