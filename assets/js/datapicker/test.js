
    var __ = function(msgid) 
    {
        return window.i18n[msgid] || msgid;
    };

    window.i18n = {
        'Are you sure?': 'آیا مطمئنید؟',
        'It is not possible to get back removed data!': 'امکان بازگردانی اطلاعات حذف شده وجود ندارد!',
        'Yes, Delete': 'بله، حذف کن',
        'Cancel': 'لغو',
        'Fill required fields': 'فیلدهای مورد نیاز را پر کنید.',
        'Please select at least 2 media album post.': 'لطفا حداقل 2 فایل چند رسانه ای برای ایجاد پست آلبومی انتخاب کنید.',
        'Please select one media for story post.': 'لطفا یک فایل چند رسانه ای برای ایجاد استوری انتخاب کنید.',
        'Please select one media for post.': 'لطفا یک فایل چند رسانه ای برای ایجاد پست انتخاب کنید.',
        'Please select an Instagram account to post.': 'لطفا یک حساب کاربری اینستاگرام برای ایجاد پست انتخاب کنید.',
        'Oops! An error occured. Please try again later!': 'وای! یک خطا رخ داد. لطفا بعدا دوباره امتحان کنید!',
        'Use the TAB key to insert emoji faster': 'برای قرار دادن سریعتر emoji از کلید TAB استفاده کنید',
        'Total Posts': 'مجموع پست‌ها',
        'Followers': 'دنبال‌کننده‌ها',
        'Following': 'دنبال‌میکنید',
        'Uploading...': 'درحال آپلود ...',
        'Do you really want to cancel automatic payments?': 'واقعا می خواهید پرداختهای خودکار را لغو کنید؟',
        'Yes, cancel automatic payments': 'بله، پرداخت‌های خودکار را لغو کن',
        'No': 'خیر',
        'Verification': 'تأیید اعتبار',
        'Searching for %s': 'درحال جستجو برای %s ...',
        '+%s more': '+%s بیشتر'
    };

    $.fn.datepicker.language['fa-IR'] = {
        days: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
        daysShort: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
        daysMin: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه'],
        months: [
          'دی',
          'بهمن',
          'اسفند',
          'فروردین',
          'اردیبهشت',
          'خرداد',
          'تیر',
          'مرداد',
          'شهریور',
          'مهر',
          'آبان',
          'آذر',
        ],      
        monthsShort: [
          'دی',
          'بهمن',
          'اسفند',
          'فروردین',
          'اردیبهشت',
          'خرداد', 
          'تیر',
          'مرداد', 
          'شهریور',
          'مهر',
          'آبان',
          'آذر',          
        ],
        today: 'امروز',
        clear: 'پاک کردن',
        dateFormat: 'yyyy/mm/dd',
        timeFormat: 'hh:ii aa',
        firstDay: 6,
    };
   
    if (typeof $.fn.oneFileManager !== 'undefined') {
        $.fn.oneFileManager.i18n["fa-IR"] = {
            selectFiles: 'فایل‌ها را انتخاب کنید',
            loadMoreFiles: 'بارگذاری موارد بیشتر',
            viewFile: 'مشاهده',
            deleteFile: 'حذف',
            urlInputPlaceholder: 'لینک خود را در اینجا قرار دهید ...',

            emptyVolume: 'فضای ذخیره سازی رسانه شما خالی است. <br /> تعدادی فایل را به اینجا بکشید.',
            dropFilesHere: 'فایل‌ها را اینجا رها کنید تا آپلود شوند',
            deleteFileConfirm: 'این فایل و تمام پست‌های ناتمام مربوط به این فایل، حذف خواهد شد. این فرآیند را نمی توان لغو کرد. آیا می خواهید ادامه دهید؟',
            bigFileSizeError: 'اندازه فایل بیش تر از حداکثر اندازه مجاز فایل است.',
            fileTypeError: 'نوع فایل مجاز نیست.',
            noEnoughVolumeError: 'فضای ذخیره سازی کافی برای آپلود این فایل موجود نیست',
            queueSizeLimit: 'فایل‌های زیادی در صف آپلود وجود دارد. لطفا پس از اتمام آخرین آپلود، دوباره امتحان کنید.',
            deleteMessage: '{count} فایل انتخاب شده است.',
            deleteMessageBtn: 'حذف شود؟',
            removeSelectionConfirmation: 'آیا می خواهید فایل‌های انتخاب شده را حذف کنید؟ این فرآیند را نمی توان از لغو کرد.',
            usedXofY: '{used} استفاده شده از {total}',
            usedX: '{used} استفاده شده',
            total: 'کل',
            xfiles: 'تعداد {count} فایل',
            remainingStorage: 'فضای ذخیره سازی باقی مانده',
            maxUploadSize: 'حداکثر اندازه فایل برای آپلود',
            unlimitedStorage: 'فضای ذخیره سازی نامحدود',
        };
    }