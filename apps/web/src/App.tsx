import { useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@/Card";
import { AdultIcon } from "@/icons/AdultIcon";
import { BurgerMenuIcon } from "@/icons/BurgerMenuIcon";
import { CloseIcon } from "@/icons/CloseIcon";
import { Instagram } from "@/icons/InstagramIcon";
import { MailIcon } from "@/icons/MailIcon";
import { MapPinIcon } from "@/icons/MapPinIcon";
import { TelegramIcon } from "@/icons/TelegramIcon";
import { TelephoneIcon } from "@/icons/TelephoneIcon";

export const App = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<div className="flex w-full flex-col font-roboto">
			<div className="h-screen snap-none snap-mandatory overflow-y-auto md:snap-y">
				<div className="snap-center">
					<div
						id="home"
						className="flex h-screen w-full flex-col bg-black py-10 text-white"
					>
						<div className="m-auto flex w-4/5 flex-row justify-between">
							<h1 className="text-4xl">
								<span className="text-orange-400">Psychology</span>
								<span> | </span>
								<span>Ilona</span>
							</h1>
							<nav className="hidden md:inline-block">
								<div className="flex flex-row gap-5">
									<a href="#home">Главная</a>
									<a href="#about">Обо мне</a>
									<a href="#services">Услуги</a>
									<a href="#faq">Вопрос</a>
								</div>
							</nav>
							<div className="md:hidden">
								{!openMenu && (
									<BurgerMenuIcon
										width={42}
										height={42}
										onClick={() => setOpenMenu(true)}
									/>
								)}
								{openMenu && (
									<div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-gray-500 px-6 py-4">
										<CloseIcon
											width={42}
											height={42}
											className="ml-auto"
											onClick={() => setOpenMenu(false)}
										/>
										<div className="flex h-screen flex-col items-center justify-center gap-20 text-xl">
											<a href="#home">Главная</a>
											<a href="#about">Обо мне</a>
											<a href="#services">Услуги</a>
											<a href="#faq">Вопрос</a>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="m-auto flex w-3/4 max-w-7xl flex-1 flex-col justify-center gap-7">
							<div className="flex flex-col gap-3 text-4xl md:text-6xl">
								<p>Привет! Я</p>
								<p className="text-orange-400">Илона Стасюкевич</p>
							</div>
							<div>
								<p>Семейный психолог</p>
							</div>
							<div className="pt-7">
								<a
									href="https://www.instagram.com/ilona_stasiukevich"
									target="_blank"
									rel="noreferrer"
									className="hover:pointer rounded-3xl border border-orange-400 px-9 py-4 text-xl"
								>
									Связаться
								</a>
							</div>
						</div>
						<div className="m-auto flex w-3/4 max-w-7xl flex-row gap-7">
							<Instagram className="text-orange-400" width={32} height={32} />
							<TelegramIcon width={32} height={32} />
						</div>
					</div>
				</div>
				<div className="snap-center">
					<div id="about" className="h-screen w-full bg-white text-black">
						<div className="flex h-full w-full items-center justify-center">
							<div className="flex w-3/4 max-w-7xl flex-col items-center justify-center gap-20 xl:flex-row">
								<div className="flex flex-col items-start justify-center gap-5 md:gap-16">
									<h1 className="text-4xl md:text-5xl">Обо мне</h1>
									<p className="max-w-xl">
										Здравствуйте, меня зовут Илона. Я помогаю людям с поиском и
										решением проблем. Использую различные практики и подходы.
										Работаю с каждым индивидуально и стараюсь помочь каждому
									</p>

									<div className="flex flex-col gap-7 text-lg md:text-xl xl:flex-row">
										<button
											type="button"
											className="rounded-3xl border border-orange-400 px-9 py-4"
										>
											Подробнее
										</button>
										<a
											href="https://www.instagram.com/ilona_stasiukevich"
											target="_blank"
											rel="noreferrer"
											className="hover:pointer rounded-3xl border border-orange-400 bg-orange-400 px-9 py-4"
										>
											Связаться
										</a>
									</div>
								</div>

								<div className="flex w-80 flex-col gap-7 md:gap-18">
									<div>
										<label htmlFor="family">Семейная психология</label>
										<div className="flex flex-row items-center">
											<span
												id="family"
												className="inline-block w-[94%] border border-orange-400"
											/>

											<span className="inline-block w-[6%] border border-gray-400" />
											<span className="ml-3">94%</span>
										</div>
									</div>

									<div>
										<label htmlFor="children">Детский психолог</label>
										<div className="flex flex-row items-center">
											<span
												id="children"
												className="inline-block w-[90%] border border-orange-400"
											/>

											<span className="inline-block w-[10%] border border-gray-400" />
											<span className="ml-3">90%</span>
										</div>
									</div>

									<div>
										<label htmlFor="adult">Взрослый психолог</label>
										<div className="flex flex-row items-center">
											<span
												id="adult"
												className="inline-block w-[87%] border border-orange-400"
											/>

											<span className="inline-block w-[13%] border border-gray-400" />
											<span className="ml-3">87%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="snap-center">
					<div id="services" className="h-screen w-full bg-gray-100">
						<div className="flex h-full w-full items-center justify-center">
							<div className="flex w-full max-w-7xl flex-col items-center justify-center gap-20 md:w-3/4">
								<h1 className="text-4xl md:text-6xl">Популярные услуги</h1>
								<div className="h-full w-full">
									<Swiper
										modules={[Navigation, Pagination, Scrollbar]}
										navigation
										pagination={{ clickable: true }}
										scrollbar={{ draggable: true }}
										spaceBetween={30}
										slidesPerView={1}
										breakpoints={{
											768: {
												slidesPerView: 2,
											},
										}}
									>
										<SwiperSlide className="p-9">
											<Card
												onClick={() => {}}
												Icon={AdultIcon}
												title="Детский психолог"
												text="Занятия с психологом становятся отличной возможностью для детей пересмотреть модели своего поведения и решить иные проблемы, с которыми сталкивается ребенок."
											/>
										</SwiperSlide>
										<SwiperSlide className="p-9">
											<Card
												onClick={() => {}}
												Icon={AdultIcon}
												title="Психолог для взрослых"
												text="Психологические консультации для взрослых: помощь при разводе, расставании, измене, эмоциональной зависимости, тревожном и депрессивном расстройстве и т.д."
											/>
										</SwiperSlide>
										<SwiperSlide className="p-9">
											<Card
												onClick={() => {}}
												Icon={AdultIcon}
												title="Психолог для взрослых"
												text="Психологические консультации для взрослых: помощь при разводе, расставании, измене, эмоциональной зависимости, тревожном и депрессивном расстройстве и т.д."
											/>
										</SwiperSlide>
										<SwiperSlide className="p-9">
											<Card
												onClick={() => {}}
												Icon={AdultIcon}
												title="Психолог для взрослых"
												text="Психологические консультации для взрослых: помощь при разводе, расставании, измене, эмоциональной зависимости, тревожном и депрессивном расстройстве и т.д."
											/>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="snap-center">
					<div
						id="faq"
						className="flex h-screen w-full flex-col bg-white text-black"
					>
						<div className="m-auto flex w-3/4 flex-1 flex-col items-center justify-center gap-5 md:gap-10">
							<h1 className="text-4xl md:text-7xl">Задать вопрос</h1>
							<p className="max-w-xl text-md md:text-lg">
								Вы всегда можете связаться со мной в социальных сетях
							</p>

							<a
								href="https://www.instagram.com/ilona_stasiukevich"
								target="_blank"
								rel="noreferrer"
								className="hover:pointer rounded-3xl border border-orange-400 bg-orange-400 px-9 py-4 md:text-xl"
							>
								Связаться
							</a>
						</div>
						<div className="w-full bg-black text-white">
							<div className="m-auto flex max-w-7xl flex-col items-start justify-around gap-7 px-5 py-8 md:flex-row md:py-15">
								<div className="flex flex-1 flex-col justify-start gap-7">
									<h3 className="text-2xl md:text-3xl">Контакты</h3>
									<ul className="flex flex-col gap-2 md:text-xl">
										<li className="flex flex-row items-center gap-4 underline-offset-4 hover:underline">
											<TelephoneIcon
												className="min-w-7"
												width={28}
												height={28}
											/>
											<a href="tel:+375297065894">+375 (29) 706-58-94</a>
										</li>
										<li className="flex flex-row items-center gap-4 underline-offset-4 hover:underline">
											<MailIcon className="min-w-7" width={28} height={28} />
											<a href="mailto:ilona.stas@mail.ru">ilona.stas@mail.ru</a>
										</li>
										<li className="flex flex-row items-center gap-4">
											<MapPinIcon className="min-w-7" width={28} height={28} />
											<p>г. Гродно, ул. Курчатова 27, каб. 97 (15 этаж)</p>
										</li>
									</ul>
								</div>
								<div className="flex flex-1 flex-col justify-start gap-7">
									<h3 className="text-2xl md:text-3xl">Реквизиты</h3>
									<p>ИП Стасюкевич Илона Александровна</p>
									<p>
										Зарегистрирована в Едином государственном регистре
										01.06.2026 г. администрацией Ленинского района г. Гродно
									</p>
									<p>УНП 591493618</p>
									<a href="/" className="underline">
										Договор публичной оферты
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
