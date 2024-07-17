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
			notSupportImage: "عنوان الصورة غير مدعوم بالخيار \"%1\"",
success: "تم حفظ التغييرات الخاصة بك، هنا معاينة",
reseted: "تم إعادة تعيين جميع الإعدادات إلى الوضع الافتراضي",
invalidAlpha: "يرجى اختيار رقم من 0 إلى 1"
},
dhbc: {
description: "لعبة امسك الكلمة، اللاعب", 
guide: "{pn}",
text: {
reply: "يرجى الرد على هذه الرسالة بالإجابة\n%1",
isSong: "هذا هو اسم الأغنية للمغني %1",
notPlayer: "⚠️ أنت لست اللاعب لهذا السؤال",
correct: "🎉 تهانينا، لقد أجبت بشكل صحيح وحصلت على %1$",
wrong: "⚠️ لقد أجبت بشكل غير صحيح"
}
},
emojimix: {
description: "دمج 2 رموز تعبيرية معًا",
guide: "   {pn} <emoji1> <emoji2>\n   مثال:  {pn} 🤣 🥰"
},
eval: {
description: "اختبار الكود بسرعة",
guide: "{pn} <الكود لاختباره>",
text: {
error: "❌ حدث خطأ:"
}
},
event: {
description: "إدارة ملفات أوامر الحدث الخاصة بك",
guide: "{pn} load <اسم ملف الأمر>\n{pn} loadAll\n{pn} install <url> <اسم ملف الأمر>: تنزيل وتحميل أمر الحدث، url هو المسار إلى ملف الأمر (raw)",
text: {
missingFileName: "⚠️ | يرجى إدخال اسم الأمر الذي تريد إعادة تحميله",
loaded: "✅ | تم تحميل أمر الحدث \"%1\" بنجاح",
loadedError: "❌ | فشل تحميل أمر الحدث \"%1\" مع الخطأ\n%2: %3",
loadedSuccess: "✅ | تم تحميل أمر الحدث \"%1\" بنجاح",
loadedFail: "❌ | فشل تحميل أمر الحدث \"%1\"\n%2",
missingCommandNameUnload: "⚠️ | يرجى إدخال اسم الأمر الذي تريد إلغاء تحميله",
unloaded: "✅ | تم إلغاء تحميل أمر الحدث \"%1\" بنجاح",
unloadedError: "❌ | فشل إلغاء تحميل أمر الحدث \"%1\" مع الخطأ\n%2: %3",
missingUrlCodeOrFileName: "⚠️ | يرجى إدخال url أو الكود واسم ملف الأمر الذي تريد تثبيته",
missingUrlOrCode: "⚠️ | يرجى إدخال url أو كود ملف الأمر الذي تريد تثبيته",
missingFileNameInstall: "⚠️ | يرجى إدخال اسم الملف لحفظ الأمر (بامتداد .js)",
invalidUrlOrCode: "⚠️ | غير قادر على الحصول على كود الأمر",
alreadExist: "⚠️ | ملف الأمر موجود بالفعل، هل أنت متأكد أنك تريد الكتابة فوق ملف الأمر القديم؟\nتفاعل مع هذه الرسالة للمتابعة",
installed: "✅ | تم تثبيت أمر الحدث \"%1\" بنجاح، ملف الأمر محفوظ في %2",
installedError: "❌ | فشل تثبيت أمر الحدث \"%1\" مع الخطأ\n%2: %3",
missingFile: "⚠️ | الملف \"%1\" غير موجود",
invalidFileName: "⚠️ | اسم الملف غير صالح",
unloadedFile: "✅ | تم إلغاء تحميل الأمر \"%1\""
}
},
filteruser: {
description: "تصفية أعضاء المجموعة حسب عدد الرسائل أو الحسابات المقفولة",
guide: "   {pn} [<عدد الرسائل> | die]",
text: {
needAdmin: "⚠️ | يرجى إضافة البوت كمسؤول مجموعة لاستخدام هذا الأمر",
confirm: "⚠️ | هل أنت متأكد أنك تريد حذف أعضاء المجموعة الذين لديهم أقل من %1 رسالة؟\nتفاعل مع هذه الرسالة للتأكيد",
kickByBlock: "✅ | تم حذف %1 أعضاء لديهم حسابات مقفولة بنجاح",
kickByMsg: "✅ | تم حذف %1 أعضاء لديهم أقل من %2 رسائل بنجاح",
kickError: "❌ | حدث خطأ ولم يتمكن من طرد %1 أعضاء:\n%2",
noBlock: "✅ | لا يوجد أعضاء لديهم حسابات مقفولة",
noMsg: "✅ | لا يوجد أعضاء لديهم أقل من %1 رسالة"
}
},
getfbstate: {
description: "الحصول على حالة fbstate الحالية",
guide: "{pn}",
text: {
success: "تم إرسال حالة fbstate إليك، يرجى التحقق من رسالة خاصة من البوت"
}
},
grouptag: {
description: "وضع علامة للأعضاء حسب المجموعة",
guide: "   {pn} add <groupTagName> <@tags>: لاستخدام إضافة علامة مجموعة جديدة أو إضافة أعضاء إلى علامة المجموعة\n   مثال:\n    {pn} TEAM1 @tag1 @tag2\n\n   {pn} del <groupTagName> <@tags>: لاستخدام إزالة أعضاء من علامة المجموعة\n   مثال:\n    {pn} del TEAM1 @tag1 @tag2\n\n   {pn} remove <groupTagName>: لاستخدام إزالة علامة المجموعة\n   مثال:\n    {pn} remove TEAM1\n\n   {pn} rename <groupTagName> | <newGroupTagName>: لاستخدام إعادة تسمية علامة المجموعة\n\n   {pn} [list | all]: لاستخدام عرض قائمة علامات المجموعة في دردشة مجموعتك\n\n   {pn} info <groupTagName>: لاستخدام عرض معلومات علامة المجموعة",
text: {
noGroupTagName: "يرجى إدخال اسم علامة المجموعة",
noMention: "لم تقم بتعليم أي عضو للإضافة إلى علامة المجموعة",
addedSuccess: "تمت إضافة الأعضاء:\n%1\nإلى علامة المجموعة \"%2\"",
addedSuccess2: "تمت إضافة علامة المجموعة \"%1\" بالأعضاء:\n%2",
existedInGroupTag: "الأعضاء:\n%1\nموجودون بالفعل في علامة المجموعة \"%2\"",
notExistedInGroupTag: "الأعضاء:\n%1\nلا يوجدون في علامة المجموعة \"%2\"",
noExistedGroupTag: "علامة المجموعة \"%1\" لا توجد في دردشة مجموعتك",
noExistedGroupTag2: "لم تقم دردشة مجموعتك بإضافة أي علامة مجموعة",
noMentionDel: "يرجى وضع علامة على الأعضاء لإزالتهم من علامة المجموعة \"%1\"",
deletedSuccess: "تم حذف الأعضاء:\n%1\nمن علامة المجموعة \"%2\"",
deletedSuccess2: "تم حذف علامة المجموعة \"%1\"",
tagged: "وضع علامة للمجموعة \"%1\":\n%2",
noGroupTagName2: "يرجى إدخال اسم علامة المجموعة القديمة واسم علامة المجموعة الجديدة، مفصولين بـ \"|\"",
renamedSuccess: "تمت إعادة تسمية علامة المجموعة \"%1\" إلى \"%2\"",
infoGroupTag: "📑 | اسم المجموعة: \"%1\"\n👥 | عدد الأعضاء: %2\n👨‍👩‍👧‍👦 | قائمة الأعضاء:\n %3"
}
},
help: {
description: "عرض كيفية استخدام الأوامر",
guide: "{pn} [فارغ | <رقم الصفحة> | <اسم الأمر>]",
text: {
help: "╭─────────────⭓\n%1\n├─────⭔\n│ الصفحة [ %2/%3 ]\n│ حاليًا، يحتوي البوت على %4 أوامر يمكن استخدامها\n│ » اكتب %5help <الصفحة> لعرض قائمة الأوامر\n│ » اكتب %5help لعرض تفاصيل كيفية استخدام ذلك الأمر\n├────────⭔\n│ %6\n╰─────────────⭓",
help2: "%1├───────⭔\n│ » حاليًا، يحتوي البوت على %2 أوامر يمكن استخدامها\n│ » اكتب %3help <اسم الأمر> لعرض تفاصيل كيفية استخدام ذلك الأمر\n│ %4\n╰─────────────⭓",
commandNotFound: "الأمر \"%1\" غير موجود",
getInfoCommand: "╭── الاسم ────⭓\n│ %1\n├── المعلومات\n│ الوصف: %2\n│ أسماء أخرى: %3\n│ أسماء أخرى في مجموعتك: %4\n│ الإصدار: %5\n│ الدور: %6\n│ الوقت لكل أمر: %7 ثانية\n│ المؤلف: %8\n├── الاستخدام\n%9\n├── الملاحظات\n│ يمكن تغيير المحتوى داخل <XXXXX>\n│ المحتوى داخل [a|b|c] هو a أو b أو c\n╰──────⭔",
doNotHave: "لا يملك",
roleText0: "0 (جميع المستخدمين)",
roleText1: "1 (مسؤولو المجموعة)",
roleText2: "2 (مشرف البوت)",
roleText0setRole: "0 (تعيين الدور، جميع المستخدمين)",
roleText1setRole: "1 (تعيين الدور، مسؤولو المجموعة)",
pageNotFound: "الصفحة %1 غير موجودة"
}
},
kick: {
description: "طرد عضو من الدردشة",
guide: "{pn} @tags: لاستخدام طرد الأعضاء الذين تم وضع علامة عليهم"
},
loadconfig: {
description: "إعادة تحميل إعدادات البوت"
},
moon: {
description: "عرض صورة القمر في الليلة التي تختارها (يوم/شهر/سنة)",
guide: "  {pn} <يوم/شهر/سنة>\n   {pn} <يوم/شهر/سنة> <عنوان>",
text: {
invalidDateFormat: "يرجى إدخال تاريخ صالح بتنسيق DD/MM/YYYY",
error: "حدث خطأ أثناء الحصول على صورة القمر لـ %1",
invalidDate: "%1 ليس تاريخًا صالحًا",
caption: "- صورة القمر في %1"
}
},
notification: {
description: "إرسال إشعار من المشرف إلى جميع المجموعات",
guide: "{pn} <الرسالة>",
text: {
missingMessage: "يرجى إدخال الرسالة التي تريد إرسالها إلى جميع المجموعات",
notification: "إشعار من مشرف البوت إلى جميع مجموعات الدردشة (لا ترد على هذه الرسالة)",
sendingNotification: "بدء إرسال إشعار من مشرف البوت إلى %1 مجموعة دردشة",
sentNotification: "✅ تم إرسال الإشعار إلى %1 مجموعة بنجاح",
errorSendingNotification: "حدث خطأ أثناء الإرسال إلى %1 مجموعة:\n %2"
}
},
prefix: {
description: "تغيير علامة الأوامر في دردشتك أو نظام البوت بالكامل (للمشرفين فقط)",
guide: "   {pn} <علامة جديدة>: تغيير علامة الأوامر في دردشتك\n   مثال:\n    {pn} #\n\n   {pn} <علامة جديدة> -g: تغيير علامة الأوامر في نظام البوت (للمشرفين فقط)\n   مثال:\n    {pn} # -g\n\n   {pn} reset: إعادة تعيين علامة الأوامر في دردشتك إلى الوضع الافتراضي",
text: {
reset: "تم إعادة تعيين علامتك إلى الوضع الافتراضي: %1",
onlyAdmin: "فقط المشرفين يمكنهم تغيير علامة الأوامر لنظام البوت",
confirmGlobal: "يرجى التفاعل مع هذه الرسالة لتأكيد تغيير علامة الأوامر لنظام البوت",
confirmThisThread: "يرجى التفاعل مع هذه الرسالة لتأكيد تغيير علامة الأوامر في دردشتك",
successGlobal: "تم تغيير علامة الأوامر لنظام البوت إلى: %1",
successThisThread: "تم تغيير علامة الأوامر في دردشتك إلى: %1",
myPrefix: "🌐 علامة النظام: %1\n🛸 علامة دردشتك: %2"
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
