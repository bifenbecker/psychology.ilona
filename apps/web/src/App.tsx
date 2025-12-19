import { useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@/Card";
import { AdultIcon } from "@/icons/AdultIcon";
import { BurgerMenuIcon } from "@/icons/BurgerMenuIcon";
import { CloseIcon } from "@/icons/CloseIcon";
import { Instagram } from "@/icons/InstagramIcon";
import { TelegramIcon } from "@/icons/TelegramIcon";

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
								<button
									type="button"
									className="rounded-3xl border border-orange-400 px-9 py-4 text-xl"
								>
									Связаться
								</button>
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
								<div className="flex flex-col items-start justify-center gap-16">
									<h1 className="text-5xl">Обо мне</h1>
									<p>Lorem</p>

									<div className="flex flex-col gap-7 xl:flex-row">
										<button
											type="button"
											className="rounded-3xl border border-orange-400 px-9 py-4 text-xl"
										>
											Подробнее
										</button>
										<button
											type="button"
											className="rounded-3xl border border-orange-400 px-9 py-4 text-xl"
										>
											Связаться
										</button>
									</div>
								</div>

								<div className="flex w-80 flex-col gap-18">
									<span className="w-full border border-orange-400" />
									<span className="w-full border border-orange-400" />
									<span className="w-full border border-orange-400" />
									<span className="w-full border border-orange-400" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="snap-center">
					<div className="h-screen w-full bg-gray-100">
						<div className="flex h-full w-full items-center justify-center">
							<div className="flex w-full max-w-7xl flex-col items-center justify-center gap-20 md:w-3/4">
								<h1 className="text-4xl md:text-6xl">Популярные услуги</h1>
								<p>Lorem</p>
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
				<div className="bg-black text-white">Footer</div>
			</div>

			{/* Footer  */}
		</div>
	);
};
