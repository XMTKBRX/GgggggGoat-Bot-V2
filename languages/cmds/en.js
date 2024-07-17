module.exports = {
    // يمكنك تخصيص اللغة هنا أو مباشرة في ملفات الأوامر
    onlyadminbox: {
        description: "تشغيل/إيقاف وضع فقط المسؤولين",
        guide: "   {pn} [تشغيل | إيقاف]",
        text: {
            turnedOn: "تم تشغيل وضع فقط المسؤولين لاستخدام الروبوت",
            turnedOff: "تم إيقاف وضع فقط المسؤولين لاستخدام الروبوت",
            syntaxError: "خطأ في الصياغة، استخدم {pn} تشغيل أو {pn} إيقاف فقط"
        }
    },
    adduser: {
        description: "إضافة مستخدم إلى محادثة المجموعة",
        guide: "   {pn} [رابط الملف الشخصي | uid]",
        text: {
            alreadyInGroup: "موجود بالفعل في المجموعة",
            successAdd: "- تم إضافة %1 أعضاء إلى المجموعة بنجاح",
            failedAdd: "- فشل في إضافة %1 أعضاء إلى المجموعة",
            approve: "- تمت إضافة %1 أعضاء إلى قائمة الموافقة",
            invalidLink: "الرجاء إدخال رابط فيسبوك صالح",
            cannotGetUid: "لا يمكن الحصول على uid لهذا المستخدم",
            linkNotExist: "عنوان URL للملف الشخصي غير موجود",
            cannotAddUser: "الروبوت محظور أو هذا المستخدم منع الغرباء من إضافتهم إلى المجموعة"
        }
    },
    admin: {
        description: "إضافة، إزالة، تعديل دور المسؤول",
        guide: "   {pn} [إضافة | -a] <uid>: إضافة دور المسؤول للمستخدم\n\t  {pn} [إزالة | -r] <uid>: إزالة دور المسؤول من المستخدم\n\t  {pn} [قائمة | -l]: قائمة بجميع المسؤولين",
        text: {
            added: "✅ | تم إضافة دور المسؤول لـ %1 مستخدمين:\n%2",
            alreadyAdmin: "\n⚠️ | %1 مستخدمين لديهم دور المسؤول بالفعل:\n%2",
            missingIdAdd: "⚠️ | الرجاء إدخال ID أو تمييز المستخدم لإضافة دور المسؤول",
            removed: "✅ | تم إزالة دور المسؤول من %1 مستخدمين:\n%2",
            notAdmin: "⚠️ | %1 مستخدمين ليس لديهم دور المسؤول:\n%2",
            missingIdRemove: "⚠️ | الرجاء إدخال ID أو تمييز المستخدم لإزالة دور المسؤول",
            listAdmin: "👑 | قائمة المسؤولين:\n%1"
        }
    },
    adminonly: {
        description: "تشغيل/إيقاف وضع فقط المسؤولين",
        guide: "{pn} [تشغيل | إيقاف]",
        text: {
            turnedOn: "تم تشغيل وضع فقط المسؤولين لاستخدام الروبوت",
            turnedOff: "تم إيقاف وضع فقط المسؤولين لاستخدام الروبوت",
            syntaxError: "خطأ في الصياغة، استخدم {pn} تشغيل أو {pn} إيقاف فقط"
        }
    },
    all: {
        description: "تمييز جميع الأعضاء في محادثتك الجماعية",
        guide: "{pn} [المحتوى | فارغ]"
    },
    anime: {
        description: "صورة أنمي عشوائية",
        guide: "{pn} <endpoint>\n   قائمة نقاط النهاية: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
        text: {
            loading: "جارٍ تهيئة الصورة، الرجاء الانتظار...",
            error: "حدث خطأ، الرجاء المحاولة مرة أخرى لاحقًا"
        }
    },
    antichangeinfobox: {
        description: "تشغيل/إيقاف منع تغيير معلومات المحادثة",
        guide: "   {pn} الصورة الرمزية [تشغيل | إيقاف]: منع تغيير صورة المحادثة\n   {pn} الاسم [تشغيل | إيقاف]: منع تغيير اسم المحادثة\n   {pn} السمة [تشغيل | إيقاف]: منع تغيير سمة (الموضوع) المحادثة\n   {pn} الرموز التعبيرية [تشغيل | إيقاف]: منع تغيير الرموز التعبيرية للمحادثة",
        text: {
            antiChangeAvatarOn: "تم تشغيل منع تغيير صورة المحادثة",
            antiChangeAvatarOff: "تم إيقاف منع تغيير صورة المحادثة",
            missingAvt: "لم تقم بتعيين صورة للمحادثة",
            antiChangeNameOn: "تم تشغيل منع تغيير اسم المحادثة",
            antiChangeNameOff: "تم إيقاف منع تغيير اسم المحادثة",
            antiChangeThemeOn: "تم تشغيل منع تغيير سمة المحادثة",
            antiChangeThemeOff: "تم إيقاف منع تغيير سمة المحادثة",
            antiChangeEmojiOn: "تم تشغيل منع تغيير الرموز التعبيرية للمحادثة",
            antiChangeEmojiOff: "تم إيقاف منع تغيير الرموز التعبيرية للمحادثة",
            antiChangeAvatarAlreadyOn: "محادثتك حالياً في وضع منع تغيير الصورة الرمزية",
            antiChangeNameAlreadyOn: "محادثتك حالياً في وضع منع تغيير الاسم",
            antiChangeThemeAlreadyOn: "محادثتك حالياً في وضع منع تغيير السمة",
            antiChangeEmojiAlreadyOn: "محادثتك حالياً في وضع منع تغيير الرموز التعبيرية"
        }
    },
    appstore: {
        description: "البحث عن تطبيق في متجر التطبيقات",
        text: {
            missingKeyword: "لم تقم بإدخال أي كلمة مفتاحية",
            noResult: "لم يتم العثور على نتائج للكلمة المفتاحية %1"
        }
    },
    autosetname: {
        description: "تغيير تلقائي للقب العضو الجديد",
        guide: "   {pn} تعيين <اللقب>: استخدم لتعيين تكوين لتغيير اللقب تلقائيًا، مع بعض الاختصارات:\n   + {userName}: اسم العضو الجديد\n   + {userID}: معرف العضو\n   مثال:\n    {pn} تعيين {userName} 🚀\n\n   {pn} [تشغيل | إيقاف]: استخدم لتشغيل/إيقاف هذه الميزة\n\n   {pn} [عرض | معلومات]: عرض التكوين الحالي",
        text: {
            missingConfig: "الرجاء إدخال التكوين المطلوب",
            configSuccess: "تم تعيين التكوين بنجاح",
            currentConfig: "تكوين تغيير الاسم التلقائي الحالي في مجموعتك:\n%1",
            notSetConfig: "لم تقم مجموعتك بتعيين تكوين تغيير الاسم التلقائي",
            syntaxError: "خطأ في الصياغة، استخدم \"{pn} تشغيل\" أو \"{pn} إيقاف\" فقط",
            turnOnSuccess: "تم تشغيل ميزة تغيير الاسم التلقائي",
            turnOffSuccess: "تم إيقاف ميزة تغيير الاسم التلقائي",
            error: "حدث خطأ أثناء استخدام ميزة تغيير الاسم التلقائي، حاول إيقاف تشغيل ميزة رابط الدعوة في المجموعة وحاول مرة أخرى لاحقًا"
        }
    },
    avatar: {
        description: "إنشاء صورة أنمي مع توقيع",
        guide: "{p}{n} <معرف الشخصية أو اسم الشخصية> | <نص الخلفية> | <التوقيع> | <اسم لون الخلفية أو كود اللون>",
        text: {
            initImage: "جارٍ تهيئة الصورة، الرجاء الانتظار...",
            invalidCharacter: "حاليًا يوجد فقط %1 شخصيات في النظام، الرجاء إدخال معرف شخصية أقل من",
            notFoundCharacter: "لم يتم العثور على شخصية باسم %1 في قائمة الشخصيات",
            errorGetCharacter: "حدث خطأ أثناء الحصول على بيانات الشخصية:\n%1: %2",
            success: "✅ صورتك الرمزية\nالشخصية: %1\nID: %2\nنص الخلفية: %3\nالتوقيع: %4\nاللون: %5",
            defaultColor: "افتراضي",
            error: "حدث خطأ\n%1: %2"
        }
    },
    badwords: {
        description: "تشغيل/إيقاف/إضافة/إزالة تحذير الكلمات المحظورة، إذا انتهك أحد الأعضاء سيتم تحذيره، في المرة الثانية سيتم طرده من المحادثة",
        guide: "   {pn} إضافة <كلمات>: إضافة كلمات محظورة (يمكنك إضافة عدة كلمات مفصولة بفواصل \",\" أو شرطات عمودية \"|\")\n   {pn} حذف <كلمات>: حذف كلمات محظورة (يمكنك حذف عدة كلمات مفصولة بفواصل \",\" أو شرطات عمودية \"|\")\n   {pn} قائمة <إخفاء | اترك فارغ>: إيقاف التحذير (أضف \"إخفاء\" لإخفاء الكلمات المحظورة)\n   {pn} إزالة التحذير [<userID> | <@tag>]: إزالة تحذير واحد لعضو واحد\n   {pn} تشغيل: تشغيل التحذير\n   {pn} إيقاف: إيقاف التحذير",
        text: {
            onText: "تشغيل",
            offText: "إيقاف",
            onlyAdmin: "⚠️ | عذرًا، فقط المسؤولين يمكنهم استخدام هذه الميزة", 
	  missingWords: "⚠️ | لم تقم بإدخال الكلمات المحظورة",
addedSuccess: "✅ | تمت إضافة %1 كلمات محظورة إلى القائمة",
alreadyExist: "❌ | الكلمات المحظورة %1 موجودة بالفعل في القائمة: %2",
tooShort: "⚠️ | الكلمات المحظورة %1 لا يمكن إضافتها لأنها أقل من حرفين: %2",
onlyAdmin2: "⚠️ | يمكن للمسؤولين فقط حذف الكلمات المحظورة من القائمة",
missingWords2: "⚠️ | لم تقم بإدخال الكلمات المراد حذفها",
deletedSuccess: "✅ | تم حذف %1 كلمات محظورة من القائمة",
notExist: "❌ | الكلمات المحظورة %1 غير موجودة في القائمة: %2",
emptyList: "⚠️ | قائمة الكلمات المحظورة في مجموعتك فارغة حالياً",
badWordsList: "📑 | قائمة الكلمات المحظورة في مجموعتك: %1",
onlyAdmin3: "⚠️ | يمكن للمسؤولين فقط %1 هذه الميزة",
turnedOnOrOff: "✅ | تم %1 تحذير الكلمات المحظورة",
onlyAdmin4: "⚠️ | يمكن للمسؤولين فقط حذف تحذير الكلمات المحظورة",
missingTarget: "⚠️ | لم تقم بإدخال معرف المستخدم أو المستخدم الذي تم الإشارة إليه",
notWarned: "⚠️ | المستخدم %1 لم يتم تحذيره بشأن الكلمات المحظورة",
removedWarn: "✅ | تم إزالة تحذير الكلمات المحظورة عن المستخدم %1 | %2",
warned: "⚠️ | تم اكتشاف الكلمات المحظورة \"%1\" في رسالتك، إذا استمرت في الانتهاك، سيتم طردك من المجموعة.",
warned2: "⚠️ | تم اكتشاف الكلمات المحظورة \"%1\" في رسالتك، لقد انتهكت مرتين وسيتم طردك من المجموعة.",
needAdmin: "البوت يحتاج إلى صلاحيات المسؤول لطرد الأعضاء المحظورين",
unwarned: "✅ | تم إزالة تحذير الكلمات المحظورة عن المستخدم %1 | %2"
		}
	},
	balance: {
		description: "عرض رصيدك أو رصيد الشخص المشار إليه",
		guide: "   {pn}: عرض رصيدك\n   {pn} <@tag>: عرض رصيد الشخص المشار إليه",
		text: {
			money: "لديك %1$",
			moneyOf: "%1 لديه %2$"
		}
	},
	batslap: {
		description: "صورة الصفعة",
		text: {
			noTag: "يجب عليك الإشارة إلى الشخص الذي تريد صفعه"
		}
	},
	busy: {
		description: "تشغيل وضع عدم الإزعاج، عندما يتم الإشارة إليك سيقوم البوت بإشعار الآخرين",
		guide: "   {pn} [فارغ | <سبب>]: تشغيل وضع عدم الإزعاج\n   {pn} off: إيقاف وضع عدم الإزعاج",
		text: {
			turnedOff: "✅ | تم إيقاف وضع عدم الإزعاج",
			turnedOn: "✅ | تم تشغيل وضع عدم الإزعاج",
			turnedOnWithReason: "✅ | تم تشغيل وضع عدم الإزعاج بسبب: %1",
			alreadyOn: "المستخدم %1 مشغول حالياً",
			alreadyOnWithReason: "المستخدم %1 مشغول حالياً بسبب: %2"
		}
	},
	callad: {
		description: "إرسال تقرير، ملاحظات، خطأ،... إلى مسؤول البوت",
		guide: "   {pn} <رسالة>",
		text: {
			missingMessage: "الرجاء إدخال الرسالة التي تريد إرسالها إلى المسؤول",
			sendByGroup: "\n- تم الإرسال من المجموعة: %1\n- معرف المجموعة: %2",
			sendByUser: "\n- تم الإرسال من المستخدم",
			content: "\n\nالمحتوى:\n─────────────────\n%1\n─────────────────\nرد على هذه الرسالة لإرسال رسالة إلى المستخدم",
			success: "تم إرسال رسالتك إلى المسؤول بنجاح!",
			reply: "📍 رد من المسؤول %1:\n─────────────────\n%2\n─────────────────\nرد على هذه الرسالة للاستمرار في إرسال الرسائل إلى المسؤول",
			replySuccess: "تم إرسال ردك إلى المسؤول بنجاح!",
			feedback: "📝 ملاحظات من المستخدم %1:\n- معرف المستخدم: %2%3\n\nالمحتوى:\n─────────────────\n%4\n─────────────────\nرد على هذه الرسالة لإرسال رسالة إلى المستخدم",
			replyUserSuccess: "تم إرسال ردك إلى المستخدم بنجاح!"
		}
	},
	cmd: {
		description: "إدارة ملفات الأوامر الخاصة بك",
		guide: "{pn} load <اسم ملف الأمر>\n{pn} loadAll\n{pn} install <رابط> <اسم ملف الأمر>: تحميل وتثبيت ملف أمر من رابط، الرابط هو مسار الملف (خام)",
		text: {
			missingFileName: "⚠️ | الرجاء إدخال اسم الأمر الذي تريد إعادة تحميله",
			loaded: "✅ | تم تحميل الأمر \"%1\" بنجاح",
			loadedError: "❌ | فشل تحميل الأمر \"%1\" بالخطأ\n%2: %3",
			loadedSuccess: "✅ | تم تحميل الأمر \"%1\" بنجاح",
			loadedFail: "❌ | فشل تحميل الأمر \"%1\"\n%2",
			missingCommandNameUnload: "⚠️ | الرجاء إدخال اسم الأمر الذي تريد إلغاء تحميله",
			unloaded: "✅ | تم إلغاء تحميل الأمر \"%1\" بنجاح",
			unloadedError: "❌ | فشل إلغاء تحميل الأمر \"%1\" بالخطأ\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | الرجاء إدخال الرابط أو الرمز واسم ملف الأمر الذي تريد تثبيته",
			missingUrlOrCode: "⚠️ | الرجاء إدخال الرابط أو الرمز لملف الأمر الذي تريد تثبيته",
			missingFileNameInstall: "⚠️ | الرجاء إدخال اسم الملف لحفظ الأمر (بامتداد .js)",
			invalidUrlOrCode: "⚠️ | غير قادر على الحصول على رمز الأمر",
			alreadExist: "⚠️ | ملف الأمر موجود بالفعل، هل تريد بالتأكيد استبدال ملف الأمر القديم؟\nتفاعل مع هذه الرسالة للمتابعة",
			installed: "✅ | تم تثبيت الأمر \"%1\" بنجاح، تم حفظ ملف الأمر في %2",
			installedError: "❌ | فشل تثبيت الأمر \"%1\" بالخطأ\n%2: %3",
			missingFile: "⚠️ | ملف الأمر \"%1\" غير موجود",
			invalidFileName: "⚠️ | اسم ملف الأمر غير صالح",
			unloadedFile: "✅ | تم إلغاء تحميل الأمر \"%1\""
		}
	},
	count: {
		description: "عرض عدد الرسائل لجميع الأعضاء أو لنفسك (منذ انضمام البوت إلى المجموعة)",
		guide: "   {pn}: يستخدم لعرض عدد رسائلك\n   {pn} @tag: يستخدم لعرض عدد رسائل الأشخاص المشار إليهم\n   {pn} all: يستخدم لعرض عدد رسائل جميع الأعضاء",
		text: {
			count: "عدد رسائل الأعضاء:",
			endMessage: "الأشخاص الذين ليس لديهم اسم في القائمة لم يرسلوا أي رسائل.",
			page: "الصفحة [%1/%2]",
			reply: "رد على هذه الرسالة برقم الصفحة لعرض المزيد",
			result: "%1 المرتبة %2 بعدد %3 رسائل",
			yourResult: "أنت في المرتبة %1 وقد أرسلت %2 رسائل في هذه المجموعة",
			invalidPage: "رقم الصفحة غير صالح"
		}
	},
	customrankcard: {
		description: "تصميم بطاقة الترتيب الخاصة بك",
		guide: {
			body: "   {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <value>"
				+ "\n   حيث: "
				+ "\n  + maincolor | background <value>: الخلفية الرئيسية لبطاقة الترتيب"
				+ "\n  + subcolor <value>: الخلفية الفرعية"
				+ "\n  + linecolor <value>: لون الخط بين الخلفية الرئيسية والفرعية"
				+ "\n  + expbarcolor <value>: لون شريط الخبرة"
				+ "\n  + progresscolor <value>: لون شريط الخبرة الحالي"
				+ "\n  + alphasubcolor <value>: شفافية الخلفية الفرعية (من 0 إلى 1)"
				+ "\n  + textcolor <value>: لون النص (رمز سداسي عشري أو rgba)"
				+ "\n  + namecolor <value>: لون الاسم"
				+ "\n  + expcolor <value>: لون الخبرة"
				+ "\n  + rankcolor <value>: لون الترتيب"
				+ "\n  + levelcolor <value>: لون المستوى"
				+ "\n    • <value> يمكن أن يكون رمز لون سداسي عشري، rgb، rgba، تدرج (كل لون مفصول بمسافة) أو رابط صورة"
				+ "\n    • إذا كنت ترغب في استخدام تدرج، يرجى إدخال العديد من الألوان مفصولة بمسافة"
				+ "\n   {pn} reset: إعادة تعيين جميع الإعدادات إلى الافتراضي"
				+ "\n   مثال:"
				+ "\n    {pn} maincolor #fff000"
				+ "\n    {pn} subcolor rgba(255,136,86,0.4)"
				+ "\n    {pn} reset",
			attachment: {
				["${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg"]: "https://i.ibb.co/BZ2Qgs1/image.png",
				["${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png"]: "https://i.ibb.co/wy1ZHHL/image.png"
			}
		},
		text: {
			invalidImage: "رابط صورة غير صالح، يرجى اختيار رابط يؤدي إلى صورة (jpg، jpeg، png، gif)، يمكنك تحميل الصورة إلى https://imgbb.com/ واختيار \"الحصول على الرابط المباشر\" للحصول على رابط الصورة",
			invalidAttachment: "مرفق غير صالح، يرجى اختيار ملف صورة",
			invalidColor: "رمز لون غير صالح، يرجى اختيار رمز لون سداسي عشري (6 أرقام) أو رمز لون rgba",
			notSupportImage: "Url image is not supported with option \"%1\"",
			success: "Your changes have been saved, here is a preview",
			reseted: "All settings have been reset to default",
			invalidAlpha: "Please choose a number from 0 -> 1"
		}
	},
	dhbc: {
		description: "play game catch the word",
		guide: "{pn}",
		text: {
			reply: "Please reply this message with the answer\n%1",
			isSong: "This is the name of the song of the singer %1",
			notPlayer: "⚠️ You are not the player of this question",
			correct: "🎉 Congratulations you have answered correctly and received %1$",
			wrong: "⚠️ You have answered incorrectly"
		}
	},
	emojimix: {
		description: "Mix 2 emoji together",
		guide: "   {pn} <emoji1> <emoji2>\n   Example:  {pn} 🤣 🥰"
	},
	eval: {
		description: "Test code quickly",
		guide: "{pn} <code to test>",
		text: {
			error: "❌ An error occurred:"
		}
	},
	event: {
		description: "Manage your event command files",
		guide: "{pn} load <command file name>\n{pn} loadAll\n{pn} install <url> <command file name>: Download and load event command, url is the path to the command file (raw)",
		text: {
			missingFileName: "⚠️ | Please enter the command name you want to reload",
			loaded: "✅ | Loaded event command \"%1\" successfully",
			loadedError: "❌ | Loaded event command \"%1\" failed with error\n%2: %3",
			loadedSuccess: "✅ | Loaded \"%1\" event command successfully",
			loadedFail: "❌ | Loaded event command \"%1\" failed\n%2",
			missingCommandNameUnload: "⚠️ | Please enter the command name you want to unload",
			unloaded: "✅ | Unloaded event command \"%1\" successfully",
			unloadedError: "❌ | Unloaded event command \"%1\" failed with error\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | Please enter the url or code and command file name you want to install",
			missingUrlOrCode: "⚠️ | Please enter the url or code of the command file you want to install",
			missingFileNameInstall: "⚠️ | Please enter the file name to save the command (with .js extension)",
			invalidUrlOrCode: "⚠️ | Unable to get command code",
			alreadExist: "⚠️ | The command file already exists, are you sure you want to overwrite the old command file?\nReact to this message to continue",
			installed: "✅ | Installed event command \"%1\" successfully, the command file is saved at %2",
			installedError: "❌ | Installed event command \"%1\" failed with error\n%2: %3",
			missingFile: "⚠️ | File \"%1\" not found",
			invalidFileName: "⚠️ | Invalid file name",
			unloadedFile: "✅ | Unloaded command \"%1\""
		}
	},
	filteruser: {
		description: "filter group members by number of messages or locked account",
		guide: "   {pn} [<number of messages> | die]",
		text: {
			needAdmin: "⚠️ | Please add the bot as a group admin to use this command",
			confirm: "⚠️ | Are you sure you want to delete group members with less than %1 messages?\nReact to this message to confirm",
			kickByBlock: "✅ | Successfully deleted %1 members who are locked acc",
			kickByMsg: "✅ | Successfully deleted %1 members with less than %2 messages",
			kickError: "❌ | An error occurred and could not kick %1 members:\n%2",
			noBlock: "✅ | There are no members who are locked acc",
			noMsg: "✅ | There are no members with less than %1 messages"
		}
	},
	getfbstate: {
		description: "Get current fbstate",
		guide: "{pn}",
		text: {
			success: "Sent fbstate to you, please check bot's private message"
		}
	},
	grouptag: {
		description: "Tag members by group",
		guide: "   {pn} add <groupTagName> <@tags>: use to add new group tag or add members to group tag\n   Example:\n    {pn} TEAM1 @tag1 @tag2\n\n   {pn} del <groupTagName> <@tags>: use to remove members from group tag\n   Example:\n    {pn} del TEAM1 @tag1 @tag2\n\n   {pn} remove <groupTagName>: use to remove group tag\n   Example:\n    {pn} remove TEAM1\n\n   {pn} rename <groupTagName> | <newGroupTagName>: use to rename group tag\n\n   {pn} [list | all]: use to view list of group tag in your group chat\n\n   {pn} info <groupTagName>: use to view info of group tag",
		text: {
			noGroupTagName: "Please enter group tag name",
			noMention: "You haven't tagged any member to add to group tag",
			addedSuccess: "Added members:\n%1\nto group tag \"%2\"",
			addedSuccess2: "Added group tag \"%1\" with members:\n%2",
			existedInGroupTag: "Members:\n%1\nalready existed in group tag \"%2\"",
			notExistedInGroupTag: "Members:\n%1\ndoesn't exist in group tag \"%2\"",
			noExistedGroupTag: "Group tag \"%1\" doesn't exist in your group chat",
			noExistedGroupTag2: "Your group chat hasn't added any group tag",
			noMentionDel: "Please tag members to remove from group tag \"%1\"",
			deletedSuccess: "Deleted members:\n%1\nfrom group tag \"%2\"",
			deletedSuccess2: "Deleted group tag \"%1\"",
			tagged: "Tag group \"%1\":\n%2",
			noGroupTagName2: "Please enter old group tag name and new group tag name, separated by \"|\"",
			renamedSuccess: "Renamed group tag \"%1\" to \"%2\"",
			infoGroupTag: "📑 | Group name: \"%1\"\n👥 | Number of members: %2\n👨‍👩‍👧‍👦 | List of members:\n %3"
		}
	},
	help: {
		description: "View command usage",
		guide: "{pn} [empty | <page number> | <command name>]",
		text: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ Page [ %2/%3 ]\n│ Currently, the bot has %4 commands that can be used\n│ » Type %5help <page> to view the command list\n│ » Type %5help to view the details of how to use that command\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ » Currently, the bot has %2 commands that can be used\n│ » Type %3help <command name> to view the details of how to use that command\n│ %4\n╰─────────────⭓",
			commandNotFound: "Command \"%1\" does not exist",
			getInfoCommand: "╭── NAME ────⭓\n│ %1\n├── INFO\n│ Description: %2\n│ Other names: %3\n│ Other names in your group: %4\n│ Version: %5\n│ Role: %6\n│ Time per command: %7s\n│ Author: %8\n├── Usage\n%9\n├── Notes\n│ The content inside <XXXXX> can be changed\n│ The content inside [a|b|c] is a or b or c\n╰──────⭔",
			doNotHave: "Do not have",
			roleText0: "0 (All users)",
			roleText1: "1 (Group administrators)",
			roleText2: "2 (Admin bot)",
			roleText0setRole: "0 (set role, all users)",
			roleText1setRole: "1 (set role, group administrators)",
			pageNotFound: "Page %1 does not exist"
		}
	},
	kick: {
		description: "Kick member out of chat box",
		guide: "{pn} @tags: use to kick members who are tagged"
	},
	loadconfig: {
		description: "Reload config of bot"
	},
	moon: {
		description: "view moon image on the night you choose (dd/mm/yyyy)",
		guide: "  {pn} <day/month/year>\n   {pn} <day/month/year> <caption>",
		text: {
			invalidDateFormat: "Please enter a valid date in DD/MM/YYYY format",
			error: "An error occurred while getting the moon image of %1",
			invalidDate: "%1 is not a valid date",
			caption: "- Moon image on %1"
		}
	},
	notification: {
		description: "Send notification from admin to all box",
		guide: "{pn} <tin nhắn>",
		text: {
			missingMessage: "Please enter the message you want to send to all groups",
			notification: "Notification from admin bot to all chat groups (do not reply to this message)",
			sendingNotification: "Start sending notification from admin bot to %1 chat groups",
			sentNotification: "✅ Sent notification to %1 groups successfully",
			errorSendingNotification: "An error occurred while sending to %1 groups:\n %2"
		}
	},
	prefix: {
		description: "Thay đổi dấu lệnh của bot trong box chat của bạn hoặc cả hệ thống bot (chỉ admin bot)",
		guide: "   {pn} <new prefix>: change new prefix in your box chat\n   Example:\n    {pn} #\n\n   {pn} <new prefix> -g: change new prefix in system bot (only admin bot)\n   Example:\n    {pn} # -g\n\n   {pn} reset: change prefix in your box chat to default",
		text: {
			reset: "Your prefix has been reset to default: %1",
			onlyAdmin: "Only admin can change prefix of system bot",
			confirmGlobal: "Please react to this message to confirm change prefix of system bot",
			confirmThisThread: "Please react to this message to confirm change prefix in your box chat",
			successGlobal: "Changed prefix of system bot to: %1",
			successThisThread: "Changed prefix in your box chat to: %1",
			myPrefix: "🌐 System prefix: %1\n🛸 Your box chat prefix: %2"
		}
	},
	rank: {
		description: "View your level or the level of the tagged person. You can tag many people"
	},
	rankup: {
		description: "Turn on/off level up notification",
		guide: "{pn} [on | off]",
		text: {
			syntaxError: "Syntax error, only use {pn} on or {pn} off",
			turnedOn: "Turned on level up notification",
			turnedOff: "Turned off level up notification",
			notiMessage: "🎉🎉 Congratulations on reaching level %1"
		}
	},
	refresh: {
		description: "refresh information of group chat or user",
		guide: "   {pn} [thread | group]: refresh information of your group chat\n   {pn} group <threadID>: refresh information of group chat by ID\n\n   {pn} user: refresh information of your user\n   {pn} user [<userID> | @tag]: refresh information of user by ID",
		text: {
			refreshMyThreadSuccess: "✅ | Refresh information of your group chat successfully!",
			refreshThreadTargetSuccess: "✅ | Refresh information of group chat %1 successfully!"
		}
	},
	rules: {
		description: "Create/view/add/edit/change position/delete group rules of you",
		guide: "   {pn} [add | -a] <rule to add>: add rule for group.\n   {pn}: view group rules.\n   {pn} [edit | -e] <n> <content after edit>: edit rule number n.\n   {pn} [move | -m] <stt1> <stt2> swap position of rule number <stt1> and <stt2>.\n   {pn} [delete | -d] <n>: delete rule number n.\n   {pn} [remove | -r]: delete all rules of group.\n\n   Example:\n    {pn} add don't spam\n    {pn} move 1 3\n    {pn} -e 1 don't spam message in group\n    {pn} -r"
	},
	sendnoti: {
		description: "Create and send notification to groups that you manage",
		guide: "   {pn} create <groupName>: Create a new notification group with name <groupName>\n   Example:\n    {pn} create TEAM1\n\n   {pn} add <groupName>: add current box chat to notification group <groupName> (you must be admin of this box chat)\n   Example:\n    {pn} add TEAM1\n\n   {pn} delete: remove current box chat from notification group <groupName> (you must be creator of this group)\n   Example:\n    {pn} delete TEAM1\n\n   {pn} send <groupName> | <message>: send notification to all groups in notification group <groupName> (you must be admin of those groups)\n   Example:\n    {pn} remove TEAM1\n\n   {pn} remove <groupName>: remove notification group <groupName> (you must be creator of notification group <groupName>)\n   Example:\n    {pn} remove TEAM1",
		text: {
			missingGroupName: "Please enter groupNoti name",
			groupNameExists: "Notification group with name %1 has been created by you before, please choose another name",
			createdGroup: "Created notification group successfully:\n- Name: %1\n- ID: %2",
			missingGroupNameToAdd: "Please enter groupNoti name you want to add this group chat to",
			groupNameNotExists: "You have not created/manage any notification group with name: %1",
			notAdmin: "You are not admin of this group chat",
			added: "Added current group chat to notification group: %1",
			missingGroupNameToDelete: "Please enter groupNoti name you want to delete this group chat from list",
			notInGroup: "Current group chat is not in notification group %1",
			deleted: "Deleted current group chat from notification group: %1",
			failed: "Failed to send notification to %1 group chats: \n%2",
			missingGroupNameToRemove: "Please enter groupNoti name you want to remove",
			removed: "Removed notification group: %1",
			missingGroupNameToSend: "Please enter groupNoti name you want to send message",
			groupIsEmpty: "Notification group \"%1\" is empty",
			sending: "Sending notification to %1 group chats",
			success: "Sent notification to %1 group chats in notification group \"%2\" successfully",
			notAdminOfGroup: "You are not admin of this group",
			missingGroupNameToView: "Please enter groupNoti name you want to view info",
			groupInfo: "- Group Name: %1\n - ID: %2\n - Created at: %3\n%4 ",
			groupInfoHasGroup: "- Has group chats: \n%1",
			noGroup: "You have not created/manage any notification group"
		}
	},
	setalias: {
		description: "Add an alias for any command in your group",
		guide: "  This command is used to add/remove alias for any command in your group\n   {pn} add <alias> <command>: add an alias for the command in your group\n   {pn} add <alias> <command> -g: add an alias for the command in the whole system (only bot admin)\nExample:\n    {pn} add ctrk customrankcard\n\n   {pn} [remove | rm] <alias> <command>: remove an alias for the command in your group\n   {pn} [remove | rm] <alias> <command> -g: remove an alias for the command in the whole system (only bot admin)\nExample:\n    {pn} rm ctrk customrankcard\n\n   {pn} list: list all alias for commands in your group\n   {pn} list -g: list all alias for commands in the whole system"
	},
	setavt: {
		description: "Change bot avatar",
		text: {
			cannotGetImage: "❌ | An error occurred while querying the image url",
			invalidImageFormat: "❌ | Invalid image format",
			changedAvatar: "✅ | Changed bot avatar successfully"
		}
	},
	setlang: {
		description: "Set default language of bot for current chat or all chats",
		guide: "   {pn} <language code ISO 639-1\n   Example:    {pn} en    {pn} vi    {pn} ja",
		text: {
			setLangForAll: "Set default language for all chats: %1",
			setLangForCurrent: "Set default language for current chat: %1",
			noPermission: "Only bot admin can use this command"
		}
	},
	setleave: {
		description: "Edit content/turn on/off leave message when member leave your group chat",
		guide: {
			body: "   {pn} on: Turn on leave message\n   {pn} off: Turn off leave message\n   {pn} text [<content> | reset]: edit text content or reset to default, available shortcuts:\n  + {userName}: name of member who leave group\n  + {userNameTag}: name of member who leave group (tag)\n  + {boxName}: name of group chat\n  + {type}: leave/kicked by admin\n  + {session}: session in day\n\n   Example:\n    {pn} text {userName} has {type} group, see you again 🤧\n\n   Reply or send a message with file with content {pn} file: to add attachment file to leave message (image, video, audio)\n\nExample:\n   {pn} file reset: reset file",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
			}
		},
		text: {
			missingContent: "Please enter content",
			edited: "Edited leave message content of your group to:\n%1",
			reseted: "Reseted leave message content",
			noFile: "No leave message attachment file to reset",
			resetedFile: "Reseted leave message attachment file successfully",
			missingFile: "Please reply this message with image/video/audio file",
			addedFile: "Added %1 attachment file to your leave message"
		}
	},
	setname: {
		description: "Change nickname of all members in chat or members tagged by a format",
		guide: {
			body: "   {pn} <nick name>: change nickname of yourself\n   {pn} @tags <nick name>: change nickname of members tagged\n   {pn} all <nick name>: change nickname of all members in chat\n\nWith available shortcuts:\n   + {userName}: name of member\n   + {userID}: ID of member\n\n   Example: (see image)",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: "https://i.ibb.co/gFh23zb/guide1.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: "https://i.ibb.co/BNWHKgj/guide2.png"
			}
		},
		text: {
			error: "An error has occurred, try turning off the invite link feature in the group and try again later"
		}
	},
	setrole: {
		description: "Edit role of command (commands with role < 2)",
		guide: "   {pn} <commandName> <new role>: set new role for command\n   With:\n   + <commandName>: command name\n   + <new role>: new role of command with:\n   + <new role> = 0: command can be used by all members in group\n   + <new role> = 1: command can be used by admin only\n   + <new role> = default: reset role of command to default\n   Example:\n    {pn} rank 1: (command rank can be used by admin only)\n    {pn} rank 0: (command rank can be used by all members in group)\n    {pn} rank default: reset to default\n—————\n   {pn} [viewrole|view|show]: view role of edited commands",
		text: {
			noEditedCommand: "✅ Your group has no edited command",
			editedCommand: "⚠️ Your group has edited commands:\n",
			noPermission: "❗ Only admin can use this command",
			commandNotFound: "Command \"%1\" not found",
			noChangeRole: "❗ Can't change role of command \"%1\"",
			resetRole: "Reset role of command \"%1\" to default",
			changedRole: "Changed role of command \"%1\" to %2"
		}
	},
	setwelcome: {
		description: "Edit welcome message content when new member join your group chat",
		guide: {
			body: "   {pn} text [<content> | reset]: edit text content or reset to default, with some shortcuts:\n  + {userName}: new member name\n  + {userNameTag}: new member name (tag)\n  + {boxName}:  group chat name\n  + {multiple}: you || you guys\n  + {session}:  session in day\n\n   Example:\n    {pn} text Hello {userName}, welcome to {boxName}, have a nice day {multiple}\n\n   Reply (phản hồi) or send a message with file with content {pn} file: to add file attachments to welcome message (image, video, audio)\n\n   Example:\n    {pn} file reset: delete file attachments",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: "https://i.ibb.co/vsCz0ks/setwelcome-en-1.png"
			}
		},
		text: {
			missingContent: "Please enter welcome message content",
			edited: "Edited welcome message content of your group to: %1",
			reseted: "Reseted welcome message content",
			noFile: "No file attachments to delete",
			resetedFile: "Reseted file attachments successfully",
			missingFile: "Please reply this message with image/video/audio file",
			addedFile: "Added %1 file attachments to your group welcome message"
		}
	},
	shortcut: {
		description: "Add a shortcut for your message in group chat",
		text: {
			missingContent: 'Please enter the message content',
			shortcutExists: 'Shortcut "%1" already exists, react to this message to replace the content of the shortcut',
			shortcutExistsByOther: 'Shortcut %1 has been added by other member, please try another keyword',
			added: 'Added shortcut %1 => %2',
			addedAttachment: ' with %1 attachment(s)',
			missingKey: 'Please enter the keyword of the shortcut you want to delete',
			notFound: 'No shortcut found for keyword %1 in your group chat',
			onlyAdmin: 'Only administrators can delete other people\'s shortcuts',
			deleted: 'Deleted shortcut %1',
			empty: 'Your group chat has not added any shortcuts',
			message: 'Message',
			attachment: 'Attachment',
			list: 'Your shortcuts list',
			onlyAdminRemoveAll: 'Only administrators can remove all shortcuts in the group chat',
			confirmRemoveAll: 'Are you sure you want to remove all shortcuts in this group chat? (react to this message to confirm)',
			removedAll: 'Removed all shortcuts in your group chat'
		}
	},
	simsimi: {
		description: "Chat with simsimi",
		guide: "   {pn} [on | off]: turn on/off simsimi\n\n   {pn} <word>: chat with simsimi\n   Example:\n    {pn} hi",
		text: {
			turnedOn: "Turned on simsimi successfully!",
			turnedOff: "Turned off simsimi successfully!",
			chatting: "Chatting with simsimi...",
			error: "Simsimi is busy, please try again later"
		}
	},
	sorthelp: {
		description: "Sort help list",
		guide: "{pn} [name | category]",
		text: {
			savedName: "Saved sort help list by name",
			savedCategory: "Saved sort help list by category"
		}
	},
	thread: {
		description: "Manage group chat in bot system",
		guide: "   {pn} [find | -f | search | -s] <name to find>: search group chat in bot data by name\n   {pn} [find | -f | search | -s] [-j | joined] <name to find>: search group chat in bot data that bot still joined by name\n   {pn} [ban | -b] [<tid> | leave blank] <reason>: use to ban group with id <tid> or current group using bot\n   Example:\n    {pn} ban 3950898668362484 spam bot\n    {pn} ban spam too much\n    {pn} unban [<tid> | leave blank] to unban group with id <tid> or current group",
		text: {
			noPermission: "You don't have permission to use this feature",
			found: "🔎 Found %1 group matching the keyword \"%3\" in bot data:\n%3",
			notFound: "❌ No group found matching the keyword: \"%1\" in bot data",
			hasBanned: "Group with id [%1 | %2] has been banned before:\n» Reason: %3\n» Time: %4",
			banned: "Banned group with id [%1 | %2] using bot.\n» Reason: %3\n» Time: %4",
			notBanned: "Group with id [%1 | %2] is not banned using bot",
			unbanned: "Unbanned group with tid [%1 | %2] using bot",
			missingReason: "Ban reason cannot be empty",
			info: "» Box ID: %1\n» Name: %2\n» Date created data: %3\n» Total members: %4\n» Boy: %5 members\n» Girl: %6 members\n» Total messages: %7%8"
		}
	},
	tid: {
		description: "View threadID of your group chat",
		guide: "{pn}"
	},
	tik: {
		description: "Download video/slide (image), audio from tiktok link",
		guide: "   {pn} [video|-v|v] <url>: use to download video/slide (image) from tiktok link.\n   {pn} [audio|-a|a] <url>: use to download audio from tiktok link",
		text: {
			invalidUrl: "Please enter a valid tiktok url",
			downloadingVideo: "Downloading video: %1...",
			downloadedSlide: "Downloaded slide: %1\n%2",
			downloadedVideo: "Downloaded video: %1\nDownload Url: %2",
			downloadingAudio: "Downloading audio: %1...",
			downloadedAudio: "Downloaded audio: %1"
		}
	},
	trigger: {
		description: "Trigger image",
		guide: "{pn} [@tag | empty]"
	},
	uid: {
		description: "View facebook user id of user",
		guide: "   {pn}: use to view your facebook user id\n   {pn} @tag: view facebook user id of tagged people\n   {pn} <profile link>: view facebook user id of profile link",
		text: {
			syntaxError: "Please tag the person you want to view uid or leave it blank to view your own uid"
		}
	},
	unsend: {
		description: "Unsend bot's message",
		guide: "reply the message you want to unsend and call the command {pn}",
		text: {
			syntaxError: "Please reply the message you want to unsend"
		}
	},
	user: {
		description: "Manage users in bot system",
		guide: "   {pn} [find | -f | search | -s] <name to find>: search for users in bot data by name\n\n   {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of message replied using bot\n\n   {pn} unban [<uid> | @tag | reply message]: to unban user using bot",
		text: {
			noUserFound: "❌ No user found with name matching keyword: \"%1\" in bot data",
			userFound: "🔎 Found %1 user with name matching keyword \"%2\" in bot data:\n%3",
			uidRequired: "Uid of user to ban cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			reasonRequired: "Reason to ban user cannot be empty, please enter uid or tag or reply message of 1 user by user ban <uid> <reason>",
			userHasBanned: "User with id [%1 | %2] has been banned before:\n» Reason: %3\n» Date: %4",
			userBanned: "User with id [%1 | %2] has been banned:\n» Reason: %3\n» Date: %4",
			uidRequiredUnban: "Uid of user to unban cannot be empty",
			userNotBanned: "User with id [%1 | %2] is not banned",
			userUnbanned: "User with id [%1 | %2] has been unbanned"
		}
	},
	videofb: {
		description: "Download video/story from facebook (public)",
		guide: "   {pn} <url video/story>: tải video từ facebook",
		text: {
			missingUrl: "Please enter the facebook video/story (public) url you want to download",
			error: "An error occurred while downloading the video",
			downloading: "Downloading video for you",
			tooLarge: "Sorry, we can't download the video for you because the size is larger than 83MB"
		}
	},
	warn: {
		description: "warn member in group, if they have 3 warns, they will be banned",
		guide: "   {pn} @tag <reason>: warn member\n   {pn} list: view list of warned members\n   {pn} listban: view list of banned members\n   {pn} info [@tag | <uid> | leave blank]: view warn info of tagged member or uid or yourself\n   {pn} unban <uid>: unban member by uid\n   {pn} unwarn <uid> [<warn number> | leave blank]: unwarn member by uid and warn number\n   {pn} warn reset: reset all warn data\n⚠️ You need to set admin for bot to auto kick banned members",
		text: {
			list: "List of members who have been warned:\n%1\n\nTo view the details of the warnings, use the \"%2warn info [@tag | <uid> | leave blank]\" command: to view the warning information of the tagged person or uid or yourself",
			listBan: "List of members who have been warned 3 times and banned from the box:\n%1",
			listEmpty: "Your group has no members who have been warned",
			listBanEmpty: "Your group has no members banned from the box",
			invalidUid: "Please enter a valid uid of the person you want to view information",
			noData: "No data",
			noPermission: "❌ Only group administrators can unban members banned from the box",
			invalidUid2: "⚠️ Please enter a valid uid of the person you want to unban",
			notBanned: "⚠️ The user with id %1 has not been banned from your box",
			unbanSuccess: "✅ Successfully unbanned member [%1 | %2], currently this person can join your chat box",
			noPermission2: "❌ Only group administrators can remove warnings from members in the group",
			invalidUid3: "⚠️ Please enter a uid or tag the person you want to remove the warning",
			noData2: "⚠️ The user with id %1 has no warning data",
			notEnoughWarn: "❌ The user %1 only has %2 warnings",
			unwarnSuccess: "✅ Successfully removed the %1 warning of member [%2 | %3]",
			noPermission3: "❌ Only group administrators can reset warning data",
			resetWarnSuccess: "✅ Successfully reset warning data",
			noPermission4: "❌ Only group administrators can warn members in the group",
			invalidUid4: "⚠️ You need to tag or reply to the message of the person you want to warn",
			warnSuccess: "⚠️ Warned member %1 times %2\n- Uid: %3\n- Reason: %4\n- Date Time: %5\nThis member has been warned 3 times and banned from the box, to unban use the command \"%6warn unban <uid>\" (with uid is the uid of the person you want to unban)",
			noPermission5: "⚠️ Bot needs administrator permissions to kick banned members",
			warnSuccess2: "⚠️ Warned member %1 times %2\n- Uid: %3\n- Reason: %4\n- Date Time: %5\nIf this person violates %6 more times, they will be banned from the box",
			hasBanned: "⚠️ The following members have been warned 3 times before and banned from the box:\n%1",
			failedKick: "⚠️ An error occurred when kicking the following members:\n%1"
		}
	},
	weather: {
		description: "view the current and next 5 days weather forecast",
		guide: "{pn} <location>",
		text: {
			syntaxError: "Please enter a location",
			notFound: "Location not found: %1",
			error: "An error has occurred: %1",
			today: "Today's weather:\n%1\n🌡 Low - high temperature %2°C - %3°C\n🌡 Feels like %4°C - %5°C\n🌅 Sunrise %6\n🌄 Sunset %7\n🌃 Moonrise %8\n🏙️ Moonset %9\n🌞 Day: %10\n🌙 Night: %11"
		}
	},
	ytb: {
		description: "Download video, audio or view video information on YouTube",
		guide: "   {pn} [video|-v] [<video name>|<video link>]: use to download video from youtube.\n   {pn} [audio|-a] [<video name>|<video link>]: use to download audio from youtube\n   {pn} [info|-i] [<video name>|<video link>]: use to view video information from youtube\n   Example:\n    {pn} -v Fallen Kingdom\n    {pn} -a Fallen Kingdom\n    {pn} -i Fallen Kingdom",
		text: {
			error: "An error has occurred: %1",
			noResult: "No search results match the keyword %1",
			choose: "%1Reply to the message with the number to choose or any content to cancel",
			downloading: "Downloading video %1",
			noVideo: "Sorry, no video was found with a size less than 83MB",
			downloadingAudio: "Downloading audio %1",
			noAudio: "Sorry, no audio was found with a size less than 26MB",
			info: "💠 Title: %1\n🏪 Channel: %2\n👨‍👩‍👧‍👦 Subscriber: %3\n⏱ Video time: %4\n👀 View: %5\n👍 Like: %6\n🆙 Upload date: %7\n🔠 ID: %8\n🔗 Link: %9",
			listChapter: "\n📖 List chapter: %1\n"
		}
	}
};
