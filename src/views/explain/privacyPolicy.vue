<!--
  隐私政策
-->
<template>
  <div class="container" :class="{ en: app.locale == 'en' }">
    <headerBar :onBack="onBack" :headTitle="title"></headerBar>
    <div class="main">
      <template v-if="language != 'en'">
        <div class="language languageZh">
          <p>
            本隐私政策（“隐私政策”或“政策”）旨在帮助您了解我们如何收集，使用，披露和/或处理您提供给我们和/或我们拥有的有关您的个人数据，无论是现在还是在将来（“信息”），以及在向我们提供您的任何信息之前帮助您做出明智的决定。信息包括任何数据，无论是否真实，关于可以从该数据中识别的个人，或者该组织已经或可能有权访问的数据和其他信息。请仔细阅读本隐私政策。如果您对此信息，我们的隐私惯例或有关本隐私政策的任何建议或反馈有任何疑问，请通过info@cannis.app与我们联系。
          </p>
          <p>
            我们将仅收集，记录，保存，存储和使用本隐私政策中所述的有关您的信息。我们仅在必要时收集信息，并且与我们与您的交易相关。我们只会在法律要求或与收集目的相关的情况下保留这些信息。本隐私政策中使用的术语，如果未在下面另行定义，则应与我们的条款和条件中提供的定义一致。如果本隐私政策与我们的条款和条件之间存在任何冲突，则以我们的条款和条件中的条款为准。
          </p>
          <p>
            我们保留随时修改和更改本隐私政策的权利，恕不另行通知。您每次访问我们的平台时都应查看本隐私政策（如条款和条件中所定义），以便了解本隐私政策的最新版本。您继续使用我们的平台即表示您接受本隐私政策及其所有后续更新和修订。如果您是未成年人，在使用我们的平台之前，您应该在父母或其他监护人的监督和指导下阅读并同意本隐私政策。
          </p>
          <h3>1.信息收集</h3>
          <p>1.1我们将在以下时间收集有关您的信息：</p>
          <p>（i）您使用我们的平台;</p>
          <p>（ii）您注册和/或使用我们的服务;</p>
          <p>（iii）您提交任何表格，包括但不限于与我们的任何服务或平台相关的申请表格，无论是在线还是通过实物形式;</p>
          <p>（iv）您与我们互动，无论是通过电子邮件，电话，信件，传真，面对面会议，社交媒体平台等;</p>
          <p>（v）您订阅我们的时事通讯，出版物或营销材料;和/或</p>
          <p>（vi）当您参加促销，调查或竞赛时。</p>
          <p>1.2我们向您收集的信息包括（但不限于）：</p>
          <p>（i）身份数据，例如您的姓名，出生日期，性别;</p>
          <p>（ii）联系数据，如您的电子邮件地址，送货地址，联系电话;</p>
          <p>（iii）帐户数据，如信用卡详细信息，银行帐户详细信息，付款方式;</p>
          <p>（iv）技术数据，如下文5.2所列的数据;</p>
          <p>（v）个人资料数据，例如用户名和密码，您的购买，您的兴趣，偏好，反馈，调查回复;</p>
          <p>（vi）使用数据，例如有关您如何使用平台，产品和服务的信息;</p>
          <p>（vii）营销和沟通数据，例如您在接收我们和我们的第三方营销时的偏好，您的沟通偏好;</p>
          <p>
            1.3如果您使用社交媒体帐户注册使用平台或将平台/
            Cannis上的帐户链接到您的社交媒体帐户或使用平台上的某些其他社交媒体功能，我们可能会访问您自愿拥有的有关您的个人数据根据提供商的政策提供给您的社交媒体提供商，我们将根据本隐私政策管理您的信息。
          </p>
          <p>1.4 Cannis不会出售或交易与第三方在线收集的用户信息。</p>
          <p>
            1.5
            我们承诺遵守2010年“个人数据保护法”，其政策，相应的指导方针和命令。在线收集的信息仅在我们的公司集团和第三方中披露，用于收集的目的，并经您授权和同意。我们向您收集的信息将在我们的公司集团和第三方中使用和共享，用于以下目的之一：
          </p>
          <p>（i）促进您使用服务和/或访问平台;</p>
          <p>（ii）处理通过平台提交的订单;</p>
          <p>（iii）完成您与Cannis或我们的商人之间的交易;</p>
          <p>（iv）允许我们的商家提供您从我们的平台购买的产品;</p>
          <p>（v）告知并更新产品的交付和各种客户支持目的;</p>
          <p>（vi）向您提供SKU等相关产品信息;</p>
          <p>（vii）处理您的订单并向您提供通过我们的平台提供的服务和信息，您可以要求;</p>
          <p>（viii）允许我们管理您的注册账户;</p>
          <p>
            （ix）核实并执行与您在线支付有关的金融交易。例如，您通过我们的平台付款将由我们指定的代理处理。在进行您选择的销售交易时，必须向这些数据处理代理商（例如我们在此上下文中指定代理商的代理商）进行披露;
          </p>
          <p>（x）进行市场研究和统计分析及调查，以改善我们的服务和平台;</p>
          <p>（xi）维护和更新我们的记录（包括归档，当用户变为非活动状态时）;</p>
          <p>（xii）支持我们的业务，财务和风险监控，规划和决策;</p>
          <p>（xiii）遵守所有适用的法律，法律和法规，以防止欺诈或非法活动，或强制执行或捍卫我们的任何权利;</p>
          <p>
            （xiv）对用户的人口统计数据进行研究，以及我们以促销电子邮件的形式向您发送我们认为您可能觉得有用的建议或信息，从而增强您访问我们平台时的体验;
          </p>
          <p>
            （xv）用于营销和广告目的 -
            如果我们为此目的这样做，我们将不会共享任何可识别个人身份的信息，或将与我们的营销和广告合作伙伴匿名您的个人身份信息;
          </p>
          <p>（xvi）它符合本隐私政策或我们的条款和条件;</p>
          <p>（xvii）披露是我们认为适当或不受法律禁止的披露;</p>
          <p>（xviii）披露是防止生命或健康受到威胁，或法律要求或有关当局要求的披露;和</p>
          <p>（xix）用于您特别授权我们这样做的其他目的。</p>
          <p>
            1.4如果第三方同意承担与Cannis相同的责任以保护您的信息，我们也可以转移您的信息，和/或在执行本文所述的任何目的时，也可以转移到马来西亚以外的地方。
          </p>
          <h2>2.订购营销或促销材料</h2>
          <p>
            2.1如果您不时订阅我们的营销和/或促销材料，这些营销和/或促销材料可能来自我们公司集团内部或通过与第三方的关系。如果您选择这样订阅，则您被视为已同意我们在公司集团和/或第三方内为此目的处理您的信息。您可以随时选择取消订阅营销和促销信息，方法是选择电子营销材料中的取消订阅功能。
          </p>
          <h2>3.保留您的信息</h2>
          <p>
            3.1我们将在必要时保留您的信息，以履行我们在此指定的目的和与之相关的所有目的，和/或收集的目的或遵守法律，监管，内部要求，以及确保您顺利使用平台和服务。
          </p>
          <p>3.2如果我们停止平台的运营，我们将及时停止收集您的信息的活动，通知您停止运营以及删除或匿名您的信息。</p>
          <h2>4.您的信息安全</h2>
          <p>4.1我们确保收集的所有信息将由我们安全可靠地存储。我们保护您的信息：</p>
          <p>（i）仅允许通过密码访问此类信息（您应将自己的密码保密，我们对任何密码滥用不承担任何责任）;</p>
          <p>（ii）维护我们的技术和系统，以防止未经授权的计算机访问;和</p>
          <p>（iii）在我们的记录保存目的不再需要时，安全地销毁您的信息。</p>
          <p>
            4.2我们实施各种安全措施，以确保您的个人信息在我们的系统/数据库中的安全性。您的个人信息包含在安全网络后面，只有少数具有此类系统/数据库访问权限的员工和/或代理才能访问。我们将根据隐私法和/或其他适用法律保留您的个人信息。也就是说，我们会在合理地假设（i）保留此类个人信息不再为您的个人信息收集目的而销毁或匿名您的个人信息;
            （ii）出于任何法律或商业目的，不再需要保留。如果您停止使用平台，或您终止使用平台和/或我们服务的许可，我们可能会继续根据本隐私政策以及隐私法规定的义务存储，使用和/或披露您的个人信息。根据适用法律，我们可能会在不事先通知您的情况下安全地处理您的个人信息。
          </p>
          <p>
            4.3如果您认为我们违反了您的隐私，或者您希望就本隐私政策中所述的目的和方式宣布您同意我们使用或披露您的信息，或要求删除或匿名信息，请发送电子邮件至info@cannis.app与我们联系，我们将解决此问题。
          </p>
          <p>
            4.4请注意，如果您出于本隐私政策中所述的目的和方式告知您撤回对我们使用或披露您的信息的同意，或要求删除或匿名您的信息，我们可能不会担任此职位继续向您提供我们的平台和/或服务，如果我们不继续向您提供我们的平台和/或服务，或与您签订合同，我们将不承担任何责任。在这种情况下，我们应明确保留我们的合法权利和补救措施。
          </p>
          <p>
            4.5我们尽最大努力保护提供给我们的任何信息。但是，通过继续使用我们的平台，您同意可能存在我们无法控制的安全问题和限制，并且您在此同意采取积极措施来保护您的个人信息的安全性，包括但不限于使用复杂的信息。密码，常规密码更改等
          </p>
          <p>
            4.6如果我们的数据库存在安全漏洞，我们也制定了应急计划。如果您的任何信息遭到入侵，或者可能受到损害，我们也会通过推送通知，电子邮件或任何合理且相关的方式及时通知您，以便为您提供任何必要的步骤建议。拍摄。
          </p>
          <h2>5.数据收集不是必需的个人信息</h2>
          <p>
            5.1
            Cannis或我们的授权服务提供商可能会使用Cookie，网络信标，标签，脚本，本地共享对象和其他类似技术来存储信息，以便在您使用我们的服务时为您提供更好，更快，更安全和个性化的体验和/或使用我们的平台。
          </p>
          <p>
            5.2当您访问Cannis时，我们公司的服务器将自动记录平台在您访问平台时发送的信息。这些数据将包括（但可能不限于）：
          </p>
          <p>（i）您设备的IP地址;</p>
          <p>
            （ii）移动设备的浏览器类型，移动设备类型，移动设备的特征，唯一设备标识符（UDID）或移动设备标识符（MEID）;
          </p>
          <p>（iii）搜寻偏好;</p>
          <p>（iv）与向您展示或已点击的广告有关的数据;</p>
          <p>（v）您使用的日期和时间;</p>
          <p>（vi）推荐网站的地址（如有的话）;</p>
          <p>（vii）您在我们的网站和移动应用程序中访问的页面;</p>
          <p>（viii）崩溃数据，性能数据;和</p>
          <p>（viii）其他统计数字。</p>
          <p>收集这些信息以进行分析和评估，以帮助我们改进我们的平台和服务。</p>
          <p>
            5.3我们的平台还可以使用GPS，Wi-Fi等技术收集有关移动设备位置的准确信息。我们收集，使用，披露和/或处理此信息，包括但不限于您所在的基于位置的服务根据您的位置请求或向您提供相关内容，或者允许您将您的位置作为我们平台下服务的一部分分享给其他用户。对于大多数移动设备，您可以撤销您的许可，以便我们通过您的设备设置获取您所在位置的此类信息。如果您对如何禁用移动设备的位置服务有疑问，请与您的移动设备服务提供商或设备制造商联系。但请注意，撤销我们获取您的位置信息的许可可能会影响您对平台的使用。
          </p>
          <p>
            5.4我们的平台可能包含指向其他第三方拥有和运营的网站或互联网资源的链接。当您点击其中一个链接时，您正在联系其他网站或互联网资源，我们对这些其他网站或互联网资源或其收集，使用或以任何方式处理您的个人信息不承担任何责任或义务。在我们的平台上包含第三方网站或链接不得以任何方式构成对此类网站内容，行为或政策的认可。
          </p>
          <h2>6.更新您的信息</h2>
          <p>
            6.1请注意，提供给我们的个人信息的准确性至关重要。您有责任告知我们您的信息变更，或者您认为我们持有的有关您的信息不准确，不完整，误导或不是最新信息。
          </p>
          <p>6.2您可以通过访问我们平台上的帐户随时访问和更新您的个人信息。</p>
          <h2>7.访问您的信息</h2>
          <p>
            7.1如果您想要求我们收集有关您的个人信息的信息，或询问我们在过去一年内如何使用或披露您的个人信息，请通过info@cannis.app与我们的官员联系。
          </p>
          <p>
            7.2。我们保留收取合理管理费用以检索您的信息记录的权利。如果是这种情况，我们会在处理您的请求之前通知您费用。
          </p>
          <p>
            7.3。我们会尽快回复您的请求。如果我们无法在您提出申请之日起三十（30）天内回复您的请求，我们将以书面形式通知您。如果我们无法向您提供任何信息或要求您进行更正，我们通常会告知您我们无法这样做的原因（除非根据适用的数据保护法要求我们这样做））。
          </p>
        </div>
      </template>
      <template v-else>
        <div class="language languageEn">
          <p>
            This Privacy Policy (“Privacy Policy” or “Policy”) is designed to assist you in understanding how we
            collect, use, disclose and/or process the personal data you have provided to us and/or we possess about you,
            whether now or in the future (“Information”), as well as to assist you in making an informed decision before
            providing us with any of your Information. Information includes any data, whether true or not, about an
            individual who can be identified from that data, or from that data and other information to which an
            organisation has or is likely to have access. Please read this Privacy Policy carefully. If you have any
            questions regarding this information, our privacy practices or any suggestions or feedback regarding this
            Privacy Policy, please contact us at info@cannis.app.
          </p>
          <p>
            We will only collect, record, hold, store and use the Information about you as outlined below in this
            Privacy Policy. We only collect Information where it is necessary for us to do so and if it is relevant to
            our dealings with you. We will only keep these Information for as long as we are either required by law, or
            as is relevant for the purposes for which it was collected. Terms used in this Privacy Policy, if not
            otherwise defined hereunder, shall be consistent with the definitions as provided in our Terms and
            Conditions. Should there be any conflict between this Privacy Policy and our Terms and Conditions, the terms
            in our Terms and Conditions shall prevail.
          </p>
          <p>
            We reserve the right to modify and change this Privacy Policy at any time without notice. You should check
            this Privacy Policy each time you access our Platform (as defined in the Terms and Conditions) so as to be
            aware of the most recent version of this Privacy Policy. YOUR CONTINUED USE OF OUR PLATFORM CONSTITUTES YOUR
            ACCEPTANCE TO THIS PRIVACY POLICY AND ALL ITS SUBSEQUENT UPDATES AND AMENDMENTS. If you are a minor, you
            should read and agree to this Privacy Policy under the supervision and guidance of your parents or other
            guardians before using our Platform.
          </p>
          <h2>1.COLLECTION OF INFORMATION</h2>
          <p>1.1 We will collect Information about you when:</p>
          <p>(i) you use our Platform;</p>
          <p>(ii) you register and/or use our Services;</p>
          <p>
            (iii) you submit any forms, including but not limited to application forms relating to any of our Services
            or Platform, whether online or by a physical form;
          </p>
          <p>
            (iv) you interact with us, whether through emails, telephone calls, letters, fax, face to face meetings,
            social media platforms and likes;
          </p>
          <p>(v) you subscribe to our newsletter, publications or marketing collaterals; and/or</p>
          <p>(vi) when you enter a promotion, survey or competition.</p>
          <p>1.2 The Information which we collect from you includes (but does not limit to):</p>
          <p>(i) identity data such as your name, date of birth, gender;</p>
          <p>(ii) contact data such as your email address, delivery address, contact number;</p>
          <p>(iii) account data such as credit card details, bank account details, payment methodology;</p>
          <p>(iv) technical data such as those listed at5.2 below;</p>
          <p>
            (v) profile data such as username and password, purchases made by you, your interests, preferences,
            feedback, survey responses;
          </p>
          <p>(vi) usage data such as information on how you use the Platform, products and Services;</p>
          <p>
            (vii) marketing and communications data such as your preferences in receiving marketing from us and our
            third parties, your communication preferences;
          </p>
          <p>
            1.3 If you sign up to use the Platform using your social media account or link your account on the
            Platform/Cannisto your social media account or use certain other social media features on the Platform, we
            may access personal data about you which you have voluntarily provided to your social media provider in
            accordance with the provider's policies and we will manage your Information in accordance with this Privacy
            Policy.
          </p>
          <p>1.3 Cannis does not sell or trade Users’ Information collected online with third parties.</p>
          <p>
            1.4 We are committed to complying with the Personal Data Protection Act 2010, its policies, corresponding
            guidelines and orders. Information collected online will only be disclosed within our corporate group and to
            third parties for the purposes for which it was collected, as authorised and consented by you.The
            Information we collect from you shall be used and shared within our corporate group and to third parties for
            one or the purposes below:
          </p>
          <p>(i) to facilitate your use of the Services and/or access to the Platform;</p>
          <p>(ii) to process your orders submit through the Platform;</p>
          <p>(iii) to complete the transactions between you and Cannis or our Merchants;</p>
          <p>(iv) to allow our Merchants to deliver Products that you purchase from our Platform;</p>
          <p>(v) to inform and update you on the delivery of the Product and for various customer support purposes;</p>
          <p>(vi) to provide you with relevant product information such as SKUs;</p>
          <p>
            (vii) to process your orders and to provide you with the Services and information offered through our
            Platform and which you may request;
          </p>
          <p>(viii) to allow us to administer your registered account with us;</p>
          <p>
            (ix) to verify and carry out financial transactions in relation to payments you may make online. For
            example, payments that you make through our Platform will be processed by our appointed agent(s). Disclosure
            to these data processing agents such as that of our appointed agent in this context is necessary for the
            purpose of conducting the sales transaction that you have opted for;
          </p>
          <p>
            (x) to conduct market research and statistical analysis and surveys with the aim of improving our Services
            and the Platform;
          </p>
          <p>(xi) to maintain and update our records (including for archiving, when a User becomes inactive);</p>
          <p>(xii) to support our business, financial and risk monitoring, planning and decision making;</p>
          <p>
            (xiii) to comply with all applicable legislation, laws and regulations, to prevent fraud or illegal
            activities, or, to enforce or defend any of our rights;
          </p>
          <p>
            (xiv) to carry out research(es) on the Users’ demographics and for us to send you suggestion or information
            in the form of promotional emails which we think you may find useful, thereby, enhancing your experience
            when you visit our Platform;
          </p>
          <p>
            (xv) for marketing and advertising purposes – for which if we do so for this purpose, we will not share any
            personal identifiable Information, or will anonymise your personal identifiable Information with our
            marketing and advertising partners;
          </p>
          <p>(xvi) it is pursuant to this Privacy Policy or our Terms and Conditions;</p>
          <p>(xvii) the disclosure is one which we deem appropriate, or are not prohibited by the Laws;</p>
          <p>
            (xviii) the disclosure is one which is necessary to prevent a threat to life or health, or required by Laws
            or requested by the relevant authorities; and
          </p>
          <p>(xix) for such other purposes for which you have specifically authorised us to do so.</p>
          <p>
            1.4 We may also transfer your Information if the third party agrees to assume the same responsibility as
            Cannis to protect your Information, and/or also to places outside Malaysia when carrying out any of the
            purposes stated herein.
          </p>
          <h2>2. SUBSCRIPTION TO MARKETING OR PROMOTIONAL MATERIALS</h2>
          <p>
            2.1 Should you subscribe to receiving our marketing and or promotional materials from time to time, these
            marketing and or promotional materials may come from within our corporate group wholly or through
            affiliation with third parties. If you choose to so subscribe, you are deemed to have consented to us
            processing within our corporate group and or third parties your Information for this purpose. You can always
            choose to unsubscribe from marketing and promotional information at any time by opting for the unsubscribe
            function within the electronic marketing material.
          </p>
          <h2>3. RETENTION OF YOUR INFORMATION</h2>
          <p>
            4.1 We ensure that all Information collected will be safely and securely stored by us. We protect your
            Information by:
          </p>
          <p>
            (i) allowing access to such Information only via passwords (where you shall keep your own password
            confidential and we do not assume any liability for any misuse of passwords);
          </p>
          <p>(ii) maintaining our technology and system to prevent unauthorised computer access; and</p>
          <p>
            (iii) securely destroying your Information when it is no longer required for our record keeping purposes.
          </p>
          <p>
            4.2 We implement a variety of security measures to ensure the security of your personalInformation on our
            systems/database. Your personal Information is contained behind secured networks and is only accessible by a
            limited number of employees and/or agents who have special access rights to such systems/database. We will
            retain your personal Information in accordance with the privacy Laws and/or other applicable laws. That is,
            we will destroy or anonymize your personal Information as soon as it is reasonable to assume that (i) the
            purpose for which your personal Information was collected is no longer being served by the retention of such
            personal Information; and (ii) retention is no longer necessary for any legal or business purposes. If you
            cease using the Platform, or your permission to use the Platform and/or our Services is terminated, we may
            continue storing, using and/or disclosing your personal Information in accordance with this Privacy Policy
            and our obligations under the privacy Laws. Subject to applicable laws, we may securely dispose of your
            personal Information without prior notice to you.
          </p>
          <p>
            4.3 If you believe your privacy has been breached by us, or if you would like to communicate the withdrawal
            of your consent to our use or disclosure of your Information for the purposes and in the manner as stated in
            this Privacy Policy, or request the deletion or anonymization of your Information, kindly contact us at
            info@cannis.app and we will resolve the issue.
          </p>
          <p>
            4.4 Kindly note that should you communicate your withdrawal of consent to our use or disclosure of your
            Information for the purposes and in the manner as stated in this Privacy Policy, or request the deletion or
            anonymization of your Information, we may not be in the position to continue to provide our Platform and/or
            the Services to you, and we shall not be liable in the event that we do not continue to provide our Platform
            and/or the Services to, or perform our contract with you. Our legal rights and remedies shall be expressly
            reserved in such circumstance.
          </p>
          <p>
            4.5 We endeavour to protect any Information provided to us to the best of our ability. However through your
            continued usage of our Platform, you agree that there may be security issues and limitations beyond our
            control, and you hereby also agree to take active measures to protect the security of your personal
            Information, including but not limited to the use of complex passwords, regular password changes, etc.
          </p>
          <p>
            4.6 We also have formulated contingency plans should there be any breach in the security of our database.
            Should any of your Information be compromised, or if it is likely to be compromised, we will also inform you
            in a timely manner through the form of push notification, email, or any reasonable and relevant means to
            advise you on any necessary steps to be taken.
          </p>
          <h2>5. COLLECTION OF DATA NOT NECESSARILY PERSONAL INFORMATION</h2>
          <p>
            5.1 Cannis or our authorized service providers may use cookies, web beacons, tags, scripts, local shared
            objects and other similar technologies for storing information to help provide you with a better, faster,
            safer and personalized experience when you use our Services and/or use our Platform.
          </p>
          <p>
            5.2 When you visit Cannis, our company servers will automatically record information that the Platform sends
            whenever you visit the Platform. This data willinclude (but may not be limited to):
          </p>
          <p>(i) yourdevice’s IP address;</p>
          <p>
            (ii) browser type, type of mobile device, characteristics of mobile device, the unique device identifier
            (UDID) or mobile equipment identifier (MEID) for your mobile device;
          </p>
          <p>(iii) search preferences;</p>
          <p>(iv) data relating to advertisements that have displayed to you or which you have clicked on;</p>
          <p>(v) date and time of your use;</p>
          <p>(vi) the address of a referring web site (if any);</p>
          <p>(vii) the pages you visit on our website and mobile applications;</p>
          <p>(viii) crash data, performance data; and</p>
          <p>(viiii) other statistics.</p>
          <p>
            TheseInformation arecollected for analysis and evaluation in order to help us improve our Platform and the
            Services.
          </p>
          <p>
            5.3 Our Platform may also collect precise information about the location of your mobile device using
            technologies such as GPS, Wi-Fi, etc. We collect, use, disclose and/or process this information including
            without limitation to, location-based services that you request or to deliver relevant content to you based
            on your location or to allow you to share your location to other Users as part of the services under our
            Platform. For most mobile devices, you are able to withdraw your permission for us to acquire this
            information on your location through your device settings. If you have questions about how to disable your
            mobile device's location services, please contact your mobile device service provider or the device
            manufacturer. However, do note that withdrawing the permission for us to acquire your location information
            may affect your use of the Platform.
          </p>
          <p>
            5.4 Our Platform may contain links to other third party owned and operated websites or internet resources.
            When you click on one of those links you are contacting another website or internet resource, we have no
            responsibility or liability for or control over those other websites or internet resources or their
            collection, use, or in any way processing of your personal Information. The inclusion of third party
            websites or links on our Platform shall not in any way constitute an endorsement of such website’s contents,
            actions or policies.
          </p>
          <h2>6. UPDATING YOUR INFORMATION</h2>
          <p>
            6.1 Do note that the accuracy of your personal Information provided to us is essential. You are responsible
            for informing us about changes to your Information or in the event you believe that the Information we hold
            about you is inaccurate, incomplete, misleading or not up-to-date.
          </p>
          <p>
            6.2 You can access and update your personal Information anytime by accessing your account on our Platform.
          </p>
          <h2>7. ACCESSING YOUR INFORMATION</h2>
          <p>
            7.1 If you would like request information about your personal Information which we have collected, or
            inquire about the ways in which your personal Information may have been used or disclosed by us within the
            past year, please contact our officer at info@cannis.app.
          </p>
          <p>
            7.2. We reserve the right to charge a reasonable administrative fee for retrieving records of your
            Information. Should this be the case, we will inform you of the fee before processing your request.
          </p>
          <p>
            7.3. We will respond to your request as soon as reasonably possible. Should we be unable to respond to your
            request within thirty (30) days from the date of your request, we will inform you in writing. If we are
            unable to provide you with any Information or to make a correction requested by you, we shall generally
            inform you of the reasons why we are unable to do so (except where we are not required to do so under the
            applicable data protection laws).
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import adapter from '@/mixins/adapter'
import openNative from '@/utils/openNative'
import headerBar from '@/components/headerBar'
import { formatLanguageType } from '@/utils/format'
export default {
  name: 'PrivacyPolicy',
  data() {
    return {}
  },
  mixins: [adapter],
  computed: {
    ...mapState(['app']),
    title() {
      return this.$t('title.privacyPolicy')
    },
    language() {
      let language = formatLanguageType(this.$route.query.language)
      this.$i18n.locale = language
      // console.log(this.$i18n.locale)
      this.$store.commit('setLanguage', language)
      return language
    }
  },
  mounted() {
    openNative.setHeaderBar('0')
  },
  methods: {
    onBack() {
      openNative.closeWebview()
    }
  },
  components: { headerBar }
}
</script>

<style lang="less" scoped>
@import './common';
.container {
  h2 {
    font-weight: 600;
  }
}
</style>
