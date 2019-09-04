<template>
	 <swiper class="swiper" autoplay="true" indicator-dots="true" circular="true">
				<swiper-item>
					<navigator url="">
						<image src="../static/images/temp/banner1.jpg" mode=""></image>
					</navigator>						
				</swiper-item>
				<swiper-item>
					<navigator url="">
						<image src="../static/images/temp/banner2.jpg" mode=""></image>
					</navigator>					
				</swiper-item>
				<swiper-item>
					<navigator url="">
						<image src="../static/images/temp/banner3.jpg" mode=""></image>
					</navigator>						
				</swiper-item>
				<swiper-item>
						<navigator url="">
							<image src="../static/images/temp/banner4.jpg" mode=""></image>
						</navigator>					
				</swiper-item>	
    </swiper>
		
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			 changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        }
		}
	}
</script>

<style>
	.swiper {
		width: 100%;
		height: 400upx;
	}
		image{
			width: 100%;
			height: 400upx;
		}
</style>
