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
						notSupportImage: "الصورة عبر الرابط غير مدعومة مع الخيار \"%1\"",
success: "تم حفظ التغييرات الخاصة بك، ها هو المعاينة",
reseted: "تم إعادة جميع الإعدادات إلى الإعدادات الافتراضية",
invalidAlpha: "يرجى اختيار رقم من 0 إلى 1"
}
},
dhbc: {
description: "لعب لعبة إمساك الكلمة",
guide: "{pn}",
text: {
reply: "يرجى الرد على هذه الرسالة بالإجابة\n%1",
isSong: "هذا هو اسم الأغنية للمغني %1",
notPlayer: "⚠️ أنت لست اللاعب لهذا السؤال",
correct: "🎉 تهانينا، لقد أجبت بشكل صحيح وحصلت على %1$",
wrong: "⚠️ أجبت بشكل غير صحيح"
}
},
emojimix: {
description: "دمج 2 إيموجي معًا",
guide: "   {pn} <emoji1> <emoji2>\n   مثال:  {pn} 🤣 🥰"
},
eval: {
description: "اختبار الكود بسرعة",
guide: "{pn} <الكود للاختبار>",
text: {
error: "❌ حدث خطأ:"
}
},
event: {
description: "إدارة ملفات أوامر الحدث الخاصة بك",
guide: "{pn} load <اسم ملف الأمر>\n{pn} loadAll\n{pn} install <url> <اسم ملف الأمر>: تحميل وتنزيل أمر الحدث، url هو المسار إلى ملف الأمر (raw)",
text: {
missingFileName: "⚠️ | يرجى إدخال اسم الأمر الذي تريد إعادة تحميله",
loaded: "✅ | تم تحميل أمر الحدث \"%1\" بنجاح",
loadedError: "❌ | فشل تحميل أمر الحدث \"%1\" مع الخطأ\n%2: %3",
loadedSuccess: "✅ | تم تحميل أمر الحدث \"%1\" بنجاح",
loadedFail: "❌ | فشل تحميل أمر الحدث \"%1\"\n%2",
missingCommandNameUnload: "⚠️ | يرجى إدخال اسم الأمر الذي تريد تفريغه",
unloaded: "✅ | تم تفريغ أمر الحدث \"%1\" بنجاح",
unloadedError: "❌ | فشل تفريغ أمر الحدث \"%1\" مع الخطأ\n%2: %3",
missingUrlCodeOrFileName: "⚠️ | يرجى إدخال url أو الكود واسم ملف الأمر الذي تريد تثبيته",
missingUrlOrCode: "⚠️ | يرجى إدخال url أو الكود لملف الأمر الذي تريد تثبيته",
missingFileNameInstall: "⚠️ | يرجى إدخال اسم الملف لحفظ الأمر (بامتداد .js)",
invalidUrlOrCode: "⚠️ | لا يمكن الحصول على كود الأمر",
alreadExist: "⚠️ | ملف الأمر موجود بالفعل، هل أنت متأكد من أنك تريد الكتابة فوق ملف الأمر القديم؟\nرد على هذه الرسالة للمتابعة",
installed: "✅ | تم تثبيت أمر الحدث \"%1\" بنجاح، تم حفظ ملف الأمر في %2",
installedError: "❌ | فشل تثبيت أمر الحدث \"%1\" مع الخطأ\n%2: %3",
missingFile: "⚠️ | لم يتم العثور على ملف \"%1\"",
invalidFileName: "⚠️ | اسم الملف غير صالح",
unloadedFile: "✅ | تم تفريغ الأمر \"%1\""
}
},
filteruser: {
description: "تصفية أعضاء المجموعة حسب عدد الرسائل أو الحسابات المقفلة",
guide: "   {pn} [<عدد الرسائل> | die]",
text: {
needAdmin: "⚠️ | يرجى إضافة البوت كمدير مجموعة لاستخدام هذا الأمر",
confirm: "⚠️ | هل أنت متأكد من أنك تريد حذف أعضاء المجموعة الذين لديهم أقل من %1 رسالة؟\nرد على هذه الرسالة لتأكيد",
kickByBlock: "✅ | تم حذف %1 أعضاء الذين لديهم حسابات مقفلة بنجاح",
kickByMsg: "✅ | تم حذف %1 أعضاء الذين لديهم أقل من %2 رسائل بنجاح",
kickError: "❌ | حدث خطأ ولم يمكن حذف %1 أعضاء:\n%2",
noBlock: "✅ | لا يوجد أعضاء لديهم حسابات مقفلة",
noMsg: "✅ | لا يوجد أعضاء لديهم أقل من %1 رسائل"
}
},
getfbstate: {
description: "الحصول على الحالة الحالية لـ fbstate",
guide: "{pn}",
text: {
success: "تم إرسال fbstate لك، يرجى التحقق من رسالة البوت الخاصة"
}
},
grouptag: {
description: "وضع علامات للأعضاء حسب المجموعة",
guide: "   {pn} add <groupTagName> <@tags>: استخدام لإضافة مجموعة علامات جديدة أو إضافة أعضاء إلى مجموعة العلامات\n   مثال:\n    {pn} TEAM1 @tag1 @tag2\n\n   {pn} del <groupTagName> <@tags>: استخدام لإزالة الأعضاء من مجموعة العلامات\n   مثال:\n    {pn} del TEAM1 @tag1 @tag2\n\n   {pn} remove <groupTagName>: استخدام لإزالة مجموعة العلامات\n   مثال:\n    {pn} remove TEAM1\n\n   {pn} rename <groupTagName> | <newGroupTagName>: استخدام لإعادة تسمية مجموعة العلامات\n\n   {pn} [list | all]: استخدام لعرض قائمة مجموعات العلامات في محادثتك الجماعية\n\n   {pn} info <groupTagName>: استخدام لعرض معلومات مجموعة العلامات",
text: {
noGroupTagName: "يرجى إدخال اسم مجموعة العلامات",
noMention: "لم تقم بوضع علامة لأي عضو لإضافته إلى مجموعة العلامات",
addedSuccess: "تمت إضافة الأعضاء:\n%1\nإلى مجموعة العلامات \"%2\"",
addedSuccess2: "تمت إضافة مجموعة العلامات \"%1\" مع الأعضاء:\n%2",
existedInGroupTag: "الأعضاء:\n%1\nموجودون بالفعل في مجموعة العلامات \"%2\"",
notExistedInGroupTag: "الأعضاء:\n%1\nغير موجودين في مجموعة العلامات \"%2\"",
noExistedGroupTag: "مجموعة العلامات \"%1\" غير موجودة في محادثتك الجماعية",
noExistedGroupTag2: "محادثتك الجماعية لم تضف أي مجموعة علامات",
noMentionDel: "يرجى وضع علامات للأعضاء لإزالتهم من مجموعة العلامات \"%1\"",
deletedSuccess: "تم حذف الأعضاء:\n%1\nمن مجموعة العلامات \"%2\"",
deletedSuccess2: "تم حذف مجموعة العلامات \"%1\"",
tagged: "علامة المجموعة \"%1\":\n%2",
noGroupTagName2: "يرجى إدخال اسم مجموعة العلامات القديمة واسم مجموعة العلامات الجديدة، مفصولة بـ \"|\"",
renamedSuccess: "تمت إعادة تسمية مجموعة العلامات \"%1\" إلى \"%2\"",
infoGroupTag: "📑 | اسم المجموعة: \"%1\"\n👥 | عدد الأعضاء: %2\n👨‍👩‍👧‍👦 | قائمة الأعضاء:\n %3"
}
},
help: {
description: "عرض كيفية استخدام الأوامر",
guide: "{pn} [فارغ | <رقم الصفحة> | <اسم الأمر>]",
text: {
help: "╭─────────────⭓\n%1\n├─────⭔\n│ صفحة [ %2/%3 ]\n│ حاليًا، البوت يحتوي على %4 أوامر يمكن استخدامها\n│ » اكتب %5help <صفحة> لعرض قائمة الأوامر\n│ » اكتب %5help لعرض تفاصيل كيفية استخدام هذا الأمر\n├────────⭔\n│ %6\n╰─────────────⭓",
help2: "%1├───────⭔\n│ » حاليًا، البوت يحتوي على %2 أوامر يمكن استخدامها\n│ » اكتب %3help <اسم الأمر> لعرض تفاصيل كيفية استخدام هذا الأمر\n│ %4\n╰─────────────⭓",
commandNotFound: "الأمر \"%1\" غير موجود",
getInfoCommand: "╭── الاسم ────⭓\n│ %1\n├── المعلومات\n│ الوصف: %2\n│ أسماء أخرى: %3\n│ أسماء أخرى في مجموعتك: %4\n│ الإصدار: %5\n│ الدور: %6\n│ الوقت لكل أمر: %7 ثانية\n│ المؤلف: %8\n├── الاستخدام\n%9\n├── الملاحظات\n│ المحتوى داخل <XXXXX> يمكن تغييره\n│ المحتوى داخل [a|b|c] هو a أو b أو c\n╰──────⭔",
doNotHave: "لا تملك",
roleText0: "0 (جميع المستخدمين)",
roleText1: "1 (مديرو المجموعة)",
roleText2: "2 (مدير البوت)",
roleText0setRole: "0 (تعيين الدور، جميع المستخدمين)",
roleText1setRole: "1 (تعيين الدور، مدراء المجموعة)",
pageNotFound: "الصفحة %1 غير موجودة"
}
},
kick: {
description: "طرد عضو من المحادثة الجماعية",
guide: "{pn} @tags: استخدام لطرد الأعضاء الذين تم وضع علامات عليهم"
},
loadconfig: {
description: "تغيير ملف التكوين للبوت الخاص بك",
guide: "{pn} <رابط إلى ملف التكوين> [<اسم ملف التكوين>]"
},
lucky: {
description: "لعب لعبة الحظ",
guide: "{pn}",
text: {
roll: "قد تم اختيار رقم عشوائي لك، من هو الأكثر حظًا؟\n%1"
}
},
msg: {
description: "إدارة رسائل البوت",
guide: "{pn} [<اسم/رمز المستخدم>]: عرض عدد الرسائل\n{pn} [اليوم | الشهر]: عرض ترتيب عدد الرسائل في اليوم/الشهر"
},
morse: {
description: "ترميز أو فك تشفير مورس",
guide: "{pn} encode <النص لترميزه>\n{pn} decode <رمز مورس لفكه>",
text: {
encodeSuccess: "تم ترميز النص \"%1\" إلى رمز مورس:\n%2",
decodeSuccess: "تم فك رمز مورس \"%1\" إلى النص:\n%2"
}
},
poll: {
description: "إدارة استطلاع الرأي",
guide: "{pn} create <عنوان الاستطلاع> | <عدد الخيارات>: إنشاء استطلاع جديد\n{pn} add <رقم الاستطلاع> | <الخيار>: إضافة خيار إلى استطلاع\n{pn} vote <رقم الاستطلاع> | <الخيار>: التصويت لاستطلاع\n{pn} delete <رقم الاستطلاع>: حذف استطلاع\n{pn} info <رقم الاستطلاع>: عرض معلومات استطلاع",
text: {
numberNeeded: "يرجى إدخال رقم صحيح لعدد الخيارات",
addOptionSuccess: "تمت إضافة الخيار \"%1\" بنجاح لاستطلاع \"%2\"",
voteSuccess: "تم تسجيل صوتك بنجاح لاستطلاع \"%1\"",
voteFailed: "فشل تسجيل صوتك لاستطلاع \"%1\". الخيار الذي اخترته غير موجود",
deleteSuccess: "تم حذف الاستطلاع \"%1\" بنجاح",
infoPoll: "📊 | معلومات الاستطلاع \"%1\"\n👤 | أنشأه: %2\n🕒 | تم إنشاؤه: %3\n🔢 | عدد الخيارات: %4\n📈 | نتائج التصويت:\n%5"
}
},
quiz: {
description: "لعب مسابقة",
guide: "{pn}",
text: {
correct: "🎉 تهانينا! لقد أجبت بشكل صحيح وحصلت على %1 نقطة",
wrong: "⚠️ أجبت بشكل غير صحيح",
notPlayer: "⚠️ أنت لست اللاعب لهذا السؤال"
}
},
reset: {
description: "إعادة ضبط البوت",
guide: "{pn} <all | command> [أسماء الأوامر]: إعادة ضبط البوت بالكامل أو الأوامر المحددة",
text: {
resetAllSuccess: "تم إعادة ضبط البوت بنجاح",
resetCommandSuccess: "تم إعادة ضبط الأوامر التالية بنجاح:\n%1"
}
},
role: {
description: "تعيين أدوار للمستخدمين",
guide: "{pn} <اسم المستخدم> <رقم الدور>: تعيين دور لمستخدم",
text: {
roleSetSuccess: "تم تعيين الدور \"%1\" للمستخدم \"%2\" بنجاح"
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
