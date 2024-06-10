const config = {
	OSC: {
		RAID_1: {
			comfy: {
				Say: [
					{ message: 'twitchRaid CarlSmile' }
				]
			}
		},
		SFX_CLAPS: {
			sound: '/sound/claps.mp3'
		},
		GB_YES: {
			comfy: {
				Say: 'Yes'
			},
			speech: {
				voice: 'Fred',
				text: 'Yes'
			}
		}
	},
	REDEEMS: {
		REDEEM_SHIP_HONK: {
			sound: '/sound/shiphonk.mp3',
			comfy: {
				Say: `we're awake!`
			}
		}
	},
	FX: {
		DOTS: {
			command: "!dots",
			fxLength: 15000,
			cooldownLength: 30000,
			onStart: {
				osc: {
					VDMX: [
						{ 
							message: 'DOTS_OSC_ON',
							value: 200
						}
					]
				},
				comfy: {
					Say: [
						{
							message: 'VFX Dots started!'
						}
					]
				}
			},
			onComplete: {
				osc: {
					VDMX: [
						{
							message: 'DOTS_OSC_OFF',
							value: 200	
						}
					]
				}
			}
		}


	}
}