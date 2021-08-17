$(document).ready(function() {
	setTimeout(() => {
		Tipped.create('.bug', "BUG", { position: 'right', size: 'x-small' });
		Tipped.create('.fix', "BUG", { position: 'right', size: 'x-small' });
		Tipped.create('.change', "CHANGE", { position: 'right', size: 'x-small' });
		Tipped.create('.add', "ADD", { position: 'right', size: 'x-small' });
		Tipped.create('.remove', "REMOVE", { position: 'right', size: 'x-small' });
		Tipped.create('.misc', "MISC", { position: 'right', size: 'x-small' });
		Tipped.create('.optimize', "OPTIMIZE", { position: 'right', size: 'x-small' });
	}, 500);
});

let Logs = { // NEWEST LOG SHOULD BE ON TOP || MAKE SURE TO EDIT THE CURRENT VAR

	// bug / change / add / remove / misc / optimize

	"Tuesday, August 17th 2021": {
		version: "alpha-1.22.0",
		current: true,
		"logs": {
			0: {type: "bug", desc: "Fixed mechanic ranks" },
			1: {type: "add", desc: "Added a notification that shows when an item cannot be added to your inventory due to being overweight" },
			2: {type: "bug", desc: "Fixed Cop Check not happening before being able to lockpick house door" },
			3: {type: "bug", desc: "Fixed an error for police alerts" },
			4: {type: "bug", desc: "Fixed apartments sometimes not loading" },
			5: {type: "optimize", desc: "Optimized apartments" },
			6: {type: "bug", desc: "Fixed pearlescent paint not saving" },
			7: {type: "bug", desc: "Fixed error in carry" },
			8: {type: "bug", desc: "Fixed ped Player Model faces not working" },
			9: {type: "add", desc: "Added control instructions for rotating character to clothing menu" },
			10: {type: "bug", desc: "Fixed player model not being set when manually entering id" },
			11: {type: "change", desc: "Lowered damage checks when vehicles spawn from garage" },
			12: {type: "add", desc: "Added a isDead check to the phone" },
			13: {type: "bug", desc: "Fixed recent calls list not loading if the caller wasn't a contact" },
			14: {type: "bug", desc: "Fixed being set as 'in call' if you didn't answer the phone or manually hung up without answering" },
			15: {type: "bug", desc: "Fixed limp not being removed after checking into the hospital" },
			16: {type: "bug", desc: "Possibly fixed vehicle names showing as 'NULL' in PDM" },
			17: {type: "remove", desc: "Removed ability to open NPC dialogue UI while in a vehicle" },
			18: {type: "add", desc: "Added an ATM to the Casino" },
			19: {type: "add", desc: "Added a NPC at the Cashier desk in the Casino" },
			20: {type: "bug", desc: "Fixed being able to play radio clicks while dead" },
		}
	},

	"Monday, August 16th 2021": {
		version: "alpha-1.21.0",
		current: false,
		"logs": {
			0: {type: "bug", desc: "Fixed mechanic ranks" },
			1: {type: "change", desc: "Lowered slots win multiplier" },
			2: {type: "change", desc: "Increased chance for slots to miss" },
			3: {type: "add", desc: "Added ability for mechanic boss to hire/fire/promote/demote" },
			4: {type: "add", desc: "Added Mechanic hop to Tire Nutz" },
			5: {type: "add", desc: "Finished the first version of the mechanic job, if you're interested in being a mechanic, contact and Admin+" },
			6: {type: "add", desc: "Added vehicle controls to the radial menu (door, window, light, engine, etc)" },
			7: {type: "bug", desc: "Possibly fixed Armor not saving/loading" },
			8: {type: "add", desc: "Added ability to purchase jerry cans from Gas Stations that can be used to fill up vehicles on the road" },
			9: {type: "add", desc: "Completely remade PDM. For the time being, financing is no longer available, vehicles that were previously financed are now considered owned." },
			10: {type: "add", desc: "Added blips for EMS" },
			11: {type: "bug", desc: "Fixed 3D /me text showing for everyone" },
		}
	},

	"Sunday, August 15th 2021": {
		version: "alpha-1.20.1",
		current: false,
		"logs": {
			0: { type: "bug", desc: "Fixed error when joining the server" },
			1: { type: "bug", desc: "Fixed Gold and Diamond prices" },
			2: { type: "change", desc: "Increased police blip update interval" },
		}
	},

	"Sunday, August 15th 2021": {
		version: "alpha-1.20.0",
		current: true,
		"logs": {
			0: {type: "change", desc: "Changed Pink Cage spawn to Integrity" },
			1: {type: "change", desc: "Police alerts now show partial plates instead of full plates" },
			2: {type: "change", desc: "Police alerts show longer" },
			3: {type: "remove", desc: "Removed unfinished face sliders" },
			4: {type: "bug", desc: "Fixed garage spawning cars in the air sometimes" },
			5: {type: "remove", desc: "Removed switchblade from weapon shop (wasn't supposed to be there)" },
			6: {type: "bug", desc: "Fixed some wound status labels" },
			7: {type: "change", desc: "Lowered fuel consumption (I think theres a deeper issue to this, if fuel is still depleting super fast, let me know)" },
			8: {type: "bug", desc: "Fixed an error with PDM (still working on stacked cars)" },
			9: {type: "bug", desc: "Fixed ability to pay negative car payments" },
			10: {type: "bug", desc: "Fixed being able to pay more money than you have for car payments." },
			11: {type: "add", desc: "Added Police Blips (This hasn't been tested, let me know if theres any issues. EMS will have this soon)" },
			12: {type: "bug", desc: "Fixed radio UI not scaling with screen resolution" },
		}
	},

	"Saturday, August 14th 2021": {
		version: "alpha-1.19.0",
		current: false,
		"logs": {
			1: {type: "add", desc: "Added a /uirestart command (or just uirestart in F8 console) that resets all UI." },
			2: {type: "bug", desc: "Fixed issue where when switching characters, your radio never gets disconnected" },
			3: {type: "bug", desc: "Fixed car boosting timer not working correctly" },
			4: {type: "bug", desc: "Fixed EMS and Police uniform presets/locker rooms not working" },
			5: {type: "bug", desc: "Fixed being able to access garage while in a vehicle" },
			6: {type: "bug", desc: "Fixed issue where drops show for everyone", link: "https://github.com/TheHiveRP/HiveIssues/issues/171" },
			7: {type: "bug", desc: "Fixed issue where new tweet input wouldn't clear after sending the tweet or cancelling" },
			8: {type: "add", desc: "Added Radios to EMS storage" },
			9: {type: "bug", desc: "Fixed 3D /me showing for everyone", link: "https://github.com/TheHiveRP/HiveIssues/issues/177" },
		}
	},

	"Tuesday, August 10th 2021": {
		version: "pre-alpha-1.18.0",
		current: false,
		"logs": {
			0: { type: "bug", desc: "Fixed house spawn selection showing `undefined`" },
			1: { type: "change", desc: "Changed the sounds for calling / receiving a call" },
			2: { type: "bug", desc: "Fixed Car boosting not working after the first boost job" },
			3: { type: "bug", desc: "Fixed Inked Duffle bags not working 100% of the time" },
			4: { type: "bug", desc: "Fixed being able to lockpick the door of a house robbery house before checking for cop count" },
			5: { type: "change", desc: "Set rewards for stolen wallet" },
			6: { type: "bug", desc: "Another attempt at fixing the weird symbols that show at character selection" },
			7: { type: "bug", desc: "Fixed apartments not loading after removing all but integrity" },
			8: { type: "add", desc: "Added Police and EMS uniforms" },
			9: { type: "add", desc: "Added missing stingray image" },
			10: { type: "add", desc: "Added new sounds when receiving a text message" },
			11: { type: "add", desc: "Added new Handy Jobs phone app to mark where jobs begin" },
			12: { type: "add", desc: "Added ability to copy your phone number by clicking on the phone number tab in settings" },
			13: { type: "change", desc: "Set price of all items in shops" },
			14: { type: "change", desc: "Set junk shop prices" },
			15: { type: "bug", desc: "Fixed Giving Keys via radial menu" },
			16: { type: "change", desc: "Increased success chance of hotwiring car (65 -> 75)" },
			17: { type: "bug", desc: "Fixed not being revived when laying on bed while dead" },
			18: { type: "change", desc: "Set hospital bill cost" },
			19: { type: "change", desc: "Set prices of dumpster items" },
			20: { type: "bug", desc: "Fixed being able to fish while in a car" },
			21: { type: "change", desc: "Set fish prices" },
			22: { type: "bug", desc: "Fixed a few small issues with hunting" },
			23: { type: "bug", desc: "Possibly fixed getting Gunpowder status when flipping someone off while in car" },
			24: { type: "change", desc: "Set prices of mining" },
			25: { type: "change", desc: "Transport job now deletes the trailer instead of having the engine eventually delete it" },
			26: { type: "add", desc: "Added a rate limit to bug reports" },
			27: { type: "change", desc: "Changed the Apartment Interior" },
			28: { type: "bug", desc: "Fixed house robbery interiors having missing models" },
			29: { type: "add", desc: "Added WARDEN anti-cheat (custom Hive Anti-Cheat)" },
			30: { type: "change", desc: "Set rewards for winning scratch off" },
		}
	},

	"Sunday, August 8th 2021": {
		version: "pre-alpha-1.17.0",
		current: false,
		"logs": {
			0: { type: "add", desc: "Add Car Boosting jobs" },
			1: { type: "change", desc: "Increased cooldown for reckless driving and shooting police alerts" },
			2: { type: "bug", desc: "Fix weird symbols sometimes showing when loading into the server" },
			3: { type: "remove", desc: "Removed all apartments except for Integrity" },
			4: { type: "bug", desc: "Possibly fixed inventory item drops showing for all players instead of the one dropping the item" },
			5: { type: "add", desc: "Added radial menu button for giving keys to the nearest player" },
			6: { type: "bug", desc: "Fixed Putting in vehicle, pulling from vehicle" },
			7: { type: "remove", desc: "Removed unused fishing items" },
			8: { type: "change", desc: "Increased Injured Person blip and changed color to Red" },
			9: { type: "change", desc: "Changed revive animation to use full body" },
			10: { type: "bug", desc: "Added Advanced Repair Kit to EMS storage" },
			11: { type: "optimize", desc: "Optimized Vehicle Failure script" },
			12: { type: "bug", desc: "Fixed cleaning vehicle causing prop to get stuck in hand" },
			13: { type: "bug", desc: "Fixed Mail Delivery job not paying player" },
			14: { type: "bug", desc: "Fixed Route Complete notification not showing" },
			15: { type: "change", desc: "Set Mail Delivery job payment" },
			16: { type: "bug", desc: "Possible fixed fishing poles stacking up while fishing" },
			17: { type: "bug", desc: "Fixed Stingray item not being given when caught" },
			18: { type: "bug", desc: "Fixed error spitting when in an area the engine doesn't know about" },
			19: { type: "change", desc: "Blocked more weapons from dropping when killing a NPC thats holding them" },
			20: { type: "bug", desc: "Fixed custom vehicle names showing as NULL" },
			21: { type: "bug", desc: "Fixed Minimap showing part of it as the custom map and most of it as the default map" },
			22: { type: "change", desc: "Rename 5th EMS Rank" },
			23: { type: "add", desc: "Add rank 6 ems garage data" },
		}
	},

	"Friday, August 6th 2021": {
		version: "pre-alpha-1.16.0",
		current: false,
		"logs": {
			0: { type: "change", desc: "Updated PDM vehicle list/prices" },
			1: { type: "bug", desc: "Possibly fixed PDM vehicle display names showing NULL" },
			2: { type: "add", desc: "Added new Delivery Job" },
		}
	},

	"Thursday, August 5th 2021": {
		version: "pre-alpha-1.15.0",
		current: false,
		"logs": {
			0: { type:"optimize", desc: "Optimized Drilling minigame" },
			1: { type:"remove", desc: "Removed the unused code search locations in Fleeca bank" },
			2: { type:"optimize", desc: "Optimized the Password Hack minigame" },
			3: { type:"add", desc: "Added a timer to the password hack minigame after the password is hidden and waiting for input" },
			4: { type:"change", desc: "When the password input is unlocked, the password input is now auto-focused so you don't have to click the input" },
			5: { type:"change", desc: "Completely redid most of the PSB Heist (this removes the 2 methods idea and focuses on one)" },
			6: { type:"add", desc: "Added a new voltage hacking minigame" },
			7: { type:"change", desc: "Stress shakes now can happen at 50% instead of 100% and grow in strength depending on how stressed you are" },
			8: { type:"change", desc: "Set prices of all vehicles in PDM" },
			9: { type:"change", desc: "Increased mining rewards (bomb and pick)" },
			10: { type:"bug", desc: "Fixed error when switching jobs while on a locked radio channel" },
		}
	},

	"Wednesday, August 4th 2021": {
		version: "pre-alpha-1.14.0",
		current: false,
		"logs": {
			0: { type: "change", desc: "Set paychecks of jobs" },
			1: { type: "change", desc: "Set 24/7 Register and Safe reward prices" },
			2: { type: "bug", desc: "Fixed Dill zones in Fleeca Banks not getting reset when the bank is reset" },
			3: { type: "bug", desc: "Fixed Drilling not working in Fleeca Bank Robberies" },
			4: { type: "bug", desc: "Fixed Drilling not working in PSB Heists" },
			5: { type: "change", desc: "Set rewards for Fleeca and PSB" },
			6: { type: "bug", desc: "Fix `Not enough cops around` error showing any time you use a lockpick" },
			7: { type: "change", desc: "Limited how many weed plants you can plant in your house/apartment to 20" },
			8: { type: "bug", desc: "Fixed weed plants stacking ontop of each other when planting" },
			9: { type: "change", desc: "Set prices for Bennys" },
			10: { type: "bug", desc: "Fixed vehicle modifications not saving on persistent vehicles" },
			11: { type: "bug", desc: "Fixed not being able to retrieve vehicles from house garages" },
			12: { type: "bug", desc: "Fixed house garages not showing until the script is restarted" },
			13: { type: "add", desc: "Added a small cooldown for ringing house doorbells" },
			14: { type: "bug", desc: "Fixed Stress screen blur not fading out" },
			15: { type: "bug", desc: "Fixed log error that broke the inventory" },
			16: { type: "change", desc: "Set prices for the house robbery items" },
			17: { type: "bug", desc: "Fixed fishing pole not getting removed when you stop fishing" },
			18: { type: "bug", desc: "Fixed stingray item not being given when you catch them" },
			19: { type: "add", desc: "Readded ability to sell fish" },
			20: { type: "change", desc: "Set price of the garbage job" },
			21: { type: "change", desc: "Set price of hunting" },
			22: { type: "bug", desc: "Fixed custom vehicles having `NULL` as their Display Names " },
			23: { type: "change", desc: "Increased time it takes to rob 24/7 register" },
			24: { type: "add", desc: "Added display for help command on terminal" },
			25: { type: "bug", desc: "Possibly fixed face sliders for clothing" },
			26: { type: "bug", desc: "Fixed being able to switch seats while cuffed" },
			27: { type: "change", desc: "Increased time it takes to reload a gun by half a second" },
			28: { type: "bug", desc: "Fixed being able to shoot while reloading" },
			29: { type: "bug", desc: "Fixed reload animation not playing when reloading" },
			30: { type: "bug", desc: "Fixed ammo item getting removed even if you cancel the reload" },
			31: { type: "change", desc: "Decreased price and increased item count of bandages in hospital storage" },
			32: { type: "change", desc: "If you're cuffed when being sent to jail, you get uncuffed" },
			33: { type: "add", desc: "Added an animation when putting on armor" },
		}
	},

	"Monday, August 2nd 2021": {
		version: "pre-alpha-1.13.0",
		current: false,
		"logs": {
			0: { type: "add", desc: "Added a Vehicle Persistence script that should help stop vehicles despawning when going too far away from them or leaving the server." },
			1: { type: "add", desc: "Added server logs that are sent to the server panel for different events (mostly admin commands)" },
			2: { type: "change", desc: "Set new weights for items (Thanks @Pyotr)" },
			3: { type: "add", desc: "Added a client error logger to the server. This sends client errors to Discord so we can easily track what errors players are experiencing but not seeing in their client consoles." },
			4: { type: "bug", desc: "Fixed Loading Screen image not scaling with screen resolution" },
			5: { type: "remove", desc: "Removed the flashing red/blue lights from the loading screen (for now) as they didn't scale with screen res" },
			6: { type: "remove", desc: "Removed a lot of unhelpful debug prints" },
			7: { type: "bug", desc: "Possibly fixed 24/7 Safes not loading properly (needs some testing)" },
			8: { type: "change", desc: "Set all of the crime cop counts" },
			9: { type: "bug", desc: "Possibly fixed Meth look zones not registering until the script is restarted (needs some testing)" },
			10: { type: "add", desc: "Added a cop count check to the Pacific Standard Bank heist" },
			11: { type: "change", desc: "Set weed prices" },
			12: { type: "change", desc: "Prices for selling meth to NPC now scales with the quality of the meth" },
			13: { type: "change", desc: "Changed arcade laptops to a different model" },
			14: { type: "bug", desc: "Fixed Appearance misspelling in the clothing menu" },
			15: { type: "change", desc: "Stress now causes blur that fades in/out instead of just snapping in/out" },
			16: { type: "change", desc: "Changed the texting app style" },
			17: { type: "bug", desc: "Fixed `Location` translation error in texting app" },
			18: { type: "add", desc: "Added Spike Strips to Police" },
			19: { type: "change", desc: "Changed bug report embed to use a timestamp instead of lua os.date" },
		}
	},

	"Friday, July 30th 2021": {
		version: "pre-alpha-1.12.0",
		current: false,
		"logs": {
			0: { type: "optimize", desc: "Switched to a new method of loading core framework files (this should optimize load times)" },
			1: { type: "bug", desc: "Fixed notifications UI having a scroll bar in the small chance you have a ton of notifications at once" },
			2: { type: "bug", desc: "Fixed HUD not showing after login" },
			3: { type: "add", desc: "Added v3 of Fishing" },
			4: { type: "change", desc: "Changed Turtles to Stingrays" },
			5: { type: "change", desc: "Updated Drilling Minigame (adds drill model, sound effects and more)" },
			6: { type: "change", desc: "Decreased volume of bug hack sound effects" },
			7: { type: "change", desc: "24/7 now sends alerts to police on the first crime you commit there" },
			8: { type: "bug", desc: "Fixed instantly getting a baggie of meth when you prepare meth for the first time" },
			9: { type: "bug", desc: "Fixed being able to copy/paste password hack's password" },
			10: { type: "bug", desc: "Fixed Police Alerts being sent to players who had a police job, then didnt (weird/unusual case, but it's fixed)" },
			11: { type: "bug", desc: "Fixed Roulette black bet including some red numbers as well" },
			12: { type: "remove", desc: "Removed the slight rotation of the timer in the roulette UI" },
			13: { type: "bug", desc: "Fixed crafting UI not working" },
			14: { type: "bug", desc: "Fixed all impounded vehicles showing for everyone in the impound lot" },
			15: { type: "change", desc: "Changed vehicle hud text from 'Cruise' to 'Limiter'" },
			16: { type: "bug", desc: "Fixed showing Drivers License and IDs showing for everyone in the server" },
			17: { type: "bug", desc: "Fixed IDs Male/Female wording" },
			18: { type: "add", desc: "Added ability to set trunk space for specific vehicle models" },
			19: { type: "bug", desc: "Fixed issue with giving a weapon with giveitem admin command" },
			20: { type: "add", desc: "Added ability for Mechanics to impound vehicles" },
			21: { type: "add", desc: "Added wounding label for Ceramic Pistol" },
			22: { type: "change", desc: "Adjusted coupe vehicle display in PDM" },
			23: { type: "bug", desc: "Fixed towed vehicles rubberbanding up and down" },
			24: { type: "bug", desc: "Fixed police armory not working" },
			25: { type: "bug", desc: "Fix MDT not working/opening if you're in a vehicle and parked behind a vehicle" },
			26: { type: "remove", desc: "Removed tables from PDM to make more room" },
			27: { type: "bug", desc: "Fixed rare case where you could no longer aim after putting your hands up with the keybind" },
			28: { type: "bug", desc: "Fixed issue where if you try to /givecash to a ID that isn't assigned to a player, it'll take your cash but error serverside" },
			29: { type: "change", desc: "Changed Map to use no postal codes but streetnames instead" },

		}
	},

	"Monday, July 19th 2021": {
		version: "pre-alpha-1.11.0",
		current: false,
		"logs": {
			1: { type: "bug", desc: "Fixed a ammo exploit" },
			2: { type: "add", desc: "Added an RC Car" },
			3: { type: "bug", desc: "Fixed Heavy Pistol using Placeholder image" },
			4: { type: "bug", desc: "Fixed Mini SMG using Placeholder image" },
			5: { type: "change", desc: "Redesigned the Character Selection UI" },
			6: { type: "bug", desc: "Fixed issue where gender wouldn't be set correctly when you made a female character" },
			7: { type: "bug", desc: "Fixed issue with Deleting a character" },
			8: { type: "add", desc: "Added an Alpha Warning to the Character Selection UI" },
			9: { type: "bug", desc: "Removed the Welcome Screen UI that shows before the Character Selection UI" },
			10: { type: "add", desc: "Added checks to make sure you can't create a character that has an invalid name (empty, has number or has spaces)" },
			11: { type: "add", desc: "Added correct 10-codes to all current Police Alerts" },
			12: { type: "change", desc: "Fleeca Bank Robberies now give Bank Keycards instead of vault notes" },
			13: { type: "remove", desc: "Removed Vault Note use entirely" },
			14: { type: "add", desc: "Added a Password Hacking minigame to the PSB Heist" },
			15: { type: "change", desc: "PSB Loud Method now alerts police at the first door instead of the 2nd" },
			16: { type: "change", desc: "Drastically decreased Weed Growth time" },
			17: { type: "change", desc: "Changed weed growth to 2% each tick instead of 1-3" },
			18: { type: "add", desc: "Added notification types to Blackjack" },
			19: { type: "add", desc: "Added sounds to slot machines" },
			20: { type: "add", desc: "Added sounds to Casino" },
			21: { type: "add", desc: "Added ability to plant weed in Apartments (Needs Testing)" },
			22: { type: "change", desc: "Changed Crafting to use Slide In Interact instead of the Eye Interact" },
			23: { type: "change", desc: "Finalized the first iteration of Weapon Crafting" },
			24: { type: "add", desc: "Added Job Checks to the /livery command" },
			25: { type: "bug", desc: "Fixed a translation for house keys menu" },
			26: { type: "add", desc: "Added ability to rob another player (via the radial menu)" },
			27: { type: "add", desc: "Added missing Pickaxe and Mining Helmets to Hardware Store" },
			28: { type: "add", desc: "Added missing Dynamite to gun store" },
			29: { type: "remove", desc: "Removed Bank Keycard from Black Market" },
			30: { type: "add", desc: "Added ability to restrict getting into trunks of specific vehicles" },
			31: { type: "bug", desc: "Fixed PDM Displays spawning 2 cars on top of each other" },
			32: { type: "add", desc: "Added all of the PDM vehicles" },
			33: { type: "bug", desc: "Fixed buying a vehicle and it not setting you as the owner" },
			34: { type: "add", desc: "Added police job checks to /setjail and /unjail commands" },
			35: { type: "change", desc: "Swapped Gold and Sulfur mining rarities (Sulfur from 4 to 3 and Gold from 3 to 4)" },
			36: { type: "add", desc: "Added Nightstick to Police Armory" },
			37: { type: "bug", desc: "Fixed being able to shoot while cuffed and in a vehicle" },
			38: { type: "remove", desc: "Removed batteries from the Meth Lab" },
			39: { type: "add", desc: "Added a blip for the Casino" },
			40: { type: "add", desc: "Added keybind for hands up (X key)" },
			41: { type: "change", desc: "Polaroids now use a custom image host server instead of uploading to Discord" },
			42: { type: "add", desc: "Added postal map (this is probably going to be redone)" },
			43: { type: "change", desc: "Decreased the volume of the door lock sounds" },
			44: { type: "change", desc: "Changed the default radio keybind to Caps Lock" },
			45: { type: "bug", desc: "Fixed being able to talk on the radio while cuffed" },
			46: { type: "add", desc: "Added Ceramic Pistol Item" },
			47: { type: "add", desc: "Added Keybinds/Commands page to this site (WIP)", link: "https://dimmies.github.io/hive-changelogs/keybinds.html" },

		}
	},

	"Thursday, July 15th 2021": {
		version: "pre-alpha-1.10.0",
		current: false,
		"logs": {
			1: { type: "bug", desc: "Fixed Fleeca Bank code search not checking distance from search location" },
			2: { type: "bug", desc: "Fixed being able to search for code in Fleeca multiple times" },
			3: { type: "bug", desc: "Fixed multiple people being able to search a code search spot at one time" },
			4: { type: "bug", desc: "Fixed being able to skip the entire meth cooking process and going straight to preparing the meth" },
			5: { type: "bug", desc: "Fixed quality sometimes being a float" },
			6: { type: "bug", desc: "Fixed ingredients in the furnace not being reset when you finish preparing" },
			7: { type: "change", desc: "Disabled meth debug mode" },
			8: { type: "bug", desc: "Possibly fixed meth eye interactions not working until the script is restarted" },
			9: { type: "bug", desc: "Fixed Pacific Standard Bank cooldown not working" },
			10: { type: "bug", desc: "Fixed Pacific Standard Bank vault not opening when doing the silent method" },
			11: { type: "bug", desc: "Fixed Police not being alerted when doing the silent method in Pacific Standard Bank" },
			12: { type: "bug", desc: "Fixed Optional Drilling points not working even if the gate was correctly thermited" },
			13: { type: "change", desc: "Decreased the Z coord for the Pacific Standard Bank zone" },
			14: { type: "bug", desc: "Fixed Sell Drugs spitting an error and not working at all" },
			15: { type: "bug", desc: "Fixed being able to sell to casino NPCs" },
			16: { type: "bug", desc: "Fixed 3-Card Poker not loading" },
			17: { type: "change", desc: "Interact Slide-In now hides when you start playing Blackjack" },
			18: { type: "remove", desc: "Removed the Casino Teleported marker" },
			19: { type: "bug", desc: "Fixed Roulette tables not properly loading" },
			20: { type: "bug", desc: "Possibly fixed keys not being given to you when you pull a vehicle out of your garage" },
			21: { type: "add", desc: "All unstored vehicles now store when the server starts (excluding impounded/repo'd vehicles)" },
			22: { type: "add", desc: "Added commands (/givehousekey and /housekeys) to give house keys to the nearest person and view who has keys to your house." },
			23: { type: "remove", desc: "Removed ability to search fingerprints" },
			24: { type: "bug", desc: "Fixed stashes not working if 2 people try to open the same stash" },
			25: { type: "add", desc: "Added ability for police to check the status of a nearby person" },
			26: { type: "change", desc: "Increased Ammo item count in Ammunation" },
			27: { type: "bug", desc: "Fixed Black Shirt being shown when in the tattoo shop instead of no shirt" },
			28: { type: "add", desc: "Added ability for anyone to change the Car Dealer displays when no dealers are online" },
			29: { type: "bug", desc: "Fixed Car Dealers not getting notifications when they get a commission payment" },
			30: { type: "bug", desc: "Fixed fishing status not being reset when you escape out of the minigame" },
			31: { type: "bug", desc: "Fixed being able to cuff while in a vehicle" },
			32: { type: "bug", desc: "Fixed Sheriff Buffalo livery being incorrect" },
			33: { type: "add", desc: "Added Undercover vehicles to sheriff garages" },
			34: { type: "bug", desc: "Fixed dropping fingerprints being incorrect" },
			35: { type: "bug", desc: "Fixed Fingerprint scanning using wrong fingerprint id" },
			36: { type: "bug", desc: "Fixed transport drop off interact slide-in not showing after the first drop off" },
			37: { type: "bug", desc: "Fixed not being able to save/load mugshots of players" },
			38: { type: "add", desc: "Added a few more details to bug reports" },
			39: { type: "bug", desc: "Fixed meth_pipe not being useable" },
			40: { type: "bug", desc: "Fixed crowbar item still using placeholder image" },
		}
	},

	"Tuesday, July 13th 2021": {
		version: "pre-alpha-1.9.0",
		current: false,
		"logs": {
			1: { type: "add", desc: "Added icons to the notifications" },
			2: { type: "bug", desc: "Fixed Fingerprint IDs not being generated or pulled when logging in" },
			3: { type: "add", desc: "Added ability to craft Aluminum Oxide and Iron Oxide" },
			4: { type: "change", desc: "Made Armor items unique (can only hold 1 per slot)" },
			5: { type: "bug", desc: "Added start of Weapon Crafting" },
			6: { type: "change", desc: "Made Inked Duffle Bags unique items" },
			7: { type: "bug", desc: "Fixed Crowbar using placeholder image" },
			8: { type: "bug", desc: "Fixed bug hacking minigame misspelling of `level`" },
			9: { type: "bug", desc: "Fixed one of the 24/7 Store safes not being robbable" },
			10: { type: "add", desc: "Added ability to search Fleeca Banks for a vault code" },
			11: { type: "add", desc: "Added item notification when receiving a inked duffle bag" },
			12: { type: "bug", desc: "Relocked the grove street house robbery house" },
			13: { type: "add", desc: "Added Meth Production and use" },
			14: { type: "change", desc: "Decreased draw distance of Drill Text" },
			15: { type: "change", desc: "Moved the initial police alert in PSB heist to the 1st door" },
			16: { type: "bug", desc: "Fixed Keycard and Vault Code not being removed when you use them" },
			17: { type: "add", desc: "Added ability for police to reset the Pacific Standard Bank after a heist" },
			18: { type: "add", desc: "Added NPC selling drugs script" },
			19: { type: "bug", desc: "Fixed misspelling of genders for weed plants" },
			20: { type: "add", desc: "Added ability to gather seeds at the public farm" },
			21: { type: "bug", desc: "Fixed translation error when harvesting a weed plant" },
			22: { type: "bug", desc: "Fixed empty weed bags only ever removing 1 even though you receive multiple" },
			23: { type: "add", desc: "Added Casino Interior" },
			24: { type: "add", desc: "Added Casino Chips currency" },
			25: { type: "add", desc: "Added 3 Card Poker" },
			26: { type: "add", desc: "Added Blackjack" },
			27: { type: "add", desc: "Added Horse Race Betting" },
			28: { type: "add", desc: "Added Roulette" },
			29: { type: "add", desc: "Added Slots" },
			30: { type: "change", desc: "Changed Arcade Script to use eye interact (AKA heavily optimized)" },
			31: { type: "change", desc: "Increased the timeout for the fortune tellers fortune text" },
			32: { type: "change", desc: "Changed clothing chat messages to use the new chat script" },
			33: { type: "change", desc: "Slightly modified the style of the clothing menu" },
			34: { type: "bug", desc: "Possibly fixed garage vehicles not giving you keys sometimes?" },
			35: { type: "add", desc: "Added ability to set the Stash Location, Closet Location and Logout Location in your house via the Radial Menu" },
			36: { type: "change", desc: "Police and EMS now receive less stress for certain actions" },
			37: { type: "add", desc: "Added removing stress while doing yoga animation" },
			38: { type: "add", desc: "Added ability to easily add/remove eye interactions" },
			39: { type: "add", desc: "Added ability to split items in half by holding control" },
			40: { type: "add", desc: "Added ability to quick-use and item by double right clicking on an item in your inventory" },
			41: { type: "bug", desc: "Fixed mining helmet not being removed when you drop the item" },
			42: { type: "bug", desc: "Fixed a translation error in phone" },
			43: { type: "bug", desc: "Fixed police app sending the wrong location" },
			44: { type: "add", desc: "Added ability to open the Police MDT from your radial menu" },
			45: { type: "add", desc: "Added mechanic towing and untowing to the radial menu" },
			46: { type: "bug", desc: "Fixed Jail shop not opening" },
			47: { type: "add", desc: "Added missing Wire Cutters and Weed Nutrition to hardware store" },
			48: { type: "bug", desc: "Possibly fixed tattoos not saving when you back out of the tattooshop menu" },
			49: { type: "bug", desc: "Fixed weapons being put away when you empty the magazine" },
			50: { type: "bug", desc: "Fixed sniper ammo loading 30 instead of 5" },
			51: { type: "bug", desc: "Possibly fixed a few hospital errors" },
			52: { type: "add", desc: "Added Boss Menus for EMS and Police to Hire/Fire/Promote/Demote other players" },
			53: { type: "add", desc: "Added new fishing minigame" },
			54: { type: "change", desc: "When you throw trash into a garbage truck, it now opens the trunk" },
			55: { type: "add", desc: "Marked Tire Nutz on the map" },
			56: { type: "bug", desc: "Fixed Police Fining spitting an error" },
			57: { type: "add", desc: "Added Interact Slide In when at the drop off point for the transport job" },
			58: { type: "change", desc: "When you return your Transport Truck it now closes the dialogue menu" },
			59: { type: "bug", desc: "Fixed vehicle searching in MDT erroring out and completely breaking your MDT" },
			60: { type: "change", desc: "Change the bug report system to send it directly to a Github Repo for better tracking", link: "https://github.com/TheHiveRP/HiveIssues/issues" },
			61: { type: "bug", desc: "Fixed Sandwich item not working" },
			62: { type: "add", desc: "Added ability to craft Joints" },
			63: { type: "add", desc: "Added ability to use joints with added effects" },
			64: { type: "bug", desc: "Readded lost lux_vehcontrol script" },
			65: { type: "bug", desc: "Fixed double doors locks not working" },
			66: { type: "add", desc: "Added lock to Chow hall at prison" },
			67: { type: "add", desc: "Added a few missing maps" },
			68: { type: "change", desc: "Changed the style of the Chat" },
			69: { type: "change", desc: "Changed Arcade to use every arcade cabinet instead of just the ones in the arcade interior" },
		}
	},

	"Sunday, July 4th 2021": {
		version: "pre-alpha-1.8.0",
		current: false,
		"logs": {
			1: { type: "bug", desc: "Fix Pool Notifications not showing" },
			2: { type: "add", desc: "Added new 'alert' notification type" },
			3: { type: "change", desc: "Changed most (if not all) core commands chat events to use the new chat system" },
			4: { type: "remove", desc: "Removed Nationality from the character information" },
			5: { type: "add", desc: "Added a Stress system" },
			6: { type: "add", desc: "Added New HUD Design" },
			7: { type: "add", desc: "Added a small loading animation on the loading screen" },
			8: { type: "bug", desc: "Fix Fleeca Bank back gate not hiding the required items UI when you leave the area" },
			9: { type: "optimize", desc: "Optimized the Fleeca Bank Robbery Script" },
			10: { type: "bug", desc: "Fixed Alta Fleeca Bank vault door having incorrect heading" },
			11: { type: "bug", desc: "Fixed house robberies giving items that didn't exist" },
			12: { type: "bug", desc: "Fixed house robberies saying you found nothing when you really did" },
			13: { type: "bug", desc: "Fixed house robberies causing the recieved item UI to show and never hide" },
			14: { type: "add", desc: "Added dropping fingerprints in Pacific Standard Bank Heist" },
			15: { type: "bug", desc: "Fixed some issues with the Money Truck Robbery. Theres still a few bugs with this though" },
			16: { type: "add", desc: "Added better notifications to Pool Script" },
			17: { type: "change", desc: "Completely redid Crafting to use a Tier system" },
			18: { type: "add", desc: "Added Crafting Bench to house decoration shop" },
			19: { type: "optimize", desc: "Optimized the Eye-Interact Script" },
			20: { type: "add", desc: "Added shops to Hotdog Stands, Snack Machines, & Drink Machines. All can be accessed by using your eye Interact" },
			21: { type: "bug", desc: "Fixed ID translations" },
			22: { type: "add", desc: "Added xa21 to the back-engines list" },
			23: { type: "add", desc: "Added a bunch of new food and drink items" },
			24: { type: "add", desc: "Added polaroids (WIP)" },
			25: { type: "bug", desc: "Fixed bug where you remain on a radio channel even when your radio has been removed from your inventory" },
			26: { type: "add", desc: "Added saving/loading tweets" },
			27: { type: "add", desc: "Added police app to allow people to send a message to police" },
			28: { type: "change", desc: "Changed Twitter App to be Dark Mode instead of Light Mode" },
			29: { type: "remove", desc: "Removed default Grove Street house that shows in the Housing App if you don't own a house" },
			30: { type: "bug", desc: "Fixed Twitter TimeAgo logic" },
			31: { type: "add", desc: "Added Up -n- atom store (NPC for now, looking to make it player ran at a later date)" },
			32: { type: "add", desc: "Added Tattoo shops" },
			33: { type: "change", desc: "When getting into a trunk of a vehicle, it now checks if the vehicle has a frunk or trunk and places you in the correct position" },
			34: { type: "optimize", desc: "Optimized Vehicle Key system" },
			35: { type: "bug", desc: "Fixed EMS Reviving and Treating Wounds mechanics not working" },
			36: { type: "change", desc: "Decreased the trip chance when you have a leg injury from (Running = 50 > Running = 25) and (Walking = 15 > Walking = 10)" },
			37: { type: "bug", desc: "Fixed not being able to sell animal carcasses to Butcher" },
			38: { type: "change", desc: "Reenabled the dynamite requirement for blast mining" },
			39: { type: "bug", desc: "Fixed blast mining cooldowns being broken" },
			40: { type: "bug", desc: "Fixed interact popup still showing the option to place explosives even when the vein is empty" },
			41: { type: "add", desc: "Added a /evidence <id> command to open a specific stash" },
			42: { type: "change", desc: "Switched Dialogue script to use the interact key instead of checking for the E key" },
			43: { type: "optimize", desc: "Optimized the binoculars script" },
			44: { type: "add", desc: "Added animations to eating and drinking" },
			45: { type: "remove", desc: "Removed the Crouching and Proning script (for now)" },
			46: { type: "optimize", desc: "Optimized the weapon draw script" },
			47: { type: "add", desc: "Added ability to eat cooked fish" },
			48: { type: "change", desc: "Tweaked all hunger/thirst values for foods and drinks" },
			49: { type: "add", desc: "Added vector3 support to doorlock script" },
			50: { type: "add", desc: "Added locks to all cell doors at the prison" },
			51: { type: "add", desc: "Added ability to change radio volume" },
			52: { type: "bug", desc: "Fixed being able to input a channel on the radio while the radio is off" },
			53: { type: "add", desc: "Added disply to show the player when the radio is off" },
		}
	},
}

let LogTypes = {
	bug: "fa-virus-slash",
	fix: "fa-virus-slash",
	change: "fa-exchange-alt",
	add: "fa-plus",
	remove: "fa-minus",
	misc: "fa-ellipsis-h",
	optimize: "fa-tachometer-alt",
}

window.onload = (event) => {
	for (log in Logs) {
		let logTitle = log
		let LogsList = Logs[log].logs

		let newLog = document.createElement("DIV")
		newLog.id = "changelog-chunk"

		// Create list of the logs
		let theList = ""
		for (list in LogsList) {
			if ( LogsList[list].link ) {
				theList = theList + '<li><i class="fas ' + LogTypes[LogsList[list].type] + ' fa-sm fa-fw ' + LogsList[list].type + '" style="color: white;"></i> ' + LogsList[list].desc + ' <a href="' + LogsList[list].link + '" target="_blank"><i id="change-link" class="fa fa-question-circle"></i></a> </li>'
			} else {
				theList = theList + '<li><i class="fas ' + LogTypes[LogsList[list].type] + ' fa-sm fa-fw ' + LogsList[list].type + '" style="color: white;"></i> ' + LogsList[list].desc + ' </li>'
			}
		}

		let changeCount = Object.keys(LogsList).length

		if (Logs[log].current == true) {
			newLog.innerHTML = '<div id="chunk-header" onclick="ToggleShow(this)"> <p>' + logTitle + '</p> <i class="fas fa-minus fa-sm fa-fw" id="chunk-head-icon"></i></div> <ul id="chunk-list" style="display: block;"> ' + theList + ' <p id="chunk-foot">' + Logs[log].version + ' | ' + changeCount + ' Changes </p> </ul> '
		} else {
			newLog.innerHTML = '<div id="chunk-header" onclick="ToggleShow(this)"> <p>' + logTitle + '</p> <i class="fas fa-plus fa-sm fa-fw" id="chunk-head-icon"></i></div> <ul id="chunk-list" style="display: none;"> ' + theList + ' <p id="chunk-foot">' + Logs[log].version + ' | ' + changeCount + ' Changes </p> </ul> '
		}

		document.getElementById("changelogs").appendChild(newLog)
	}
};

function ToggleShow(ele) {
	let changeList = ele.parentElement.querySelector("#chunk-list")
	let toggleIcon = ele.querySelector("#chunk-head-icon")

	if ( changeList.style.display == "none" ) {
		changeList.style.display = "block"
		toggleIcon.classList.remove("fa-plus")
		toggleIcon.classList.add("fa-minus")
	} else {
		changeList.style.display = "none"
		toggleIcon.classList.remove("fa-minus")
		toggleIcon.classList.add("fa-plus")
	}
}