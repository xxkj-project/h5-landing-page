<!--
  服务协议
-->
<template>
  <div class="container" :class="{ en: app.locale == 'en' }">
    <headerBar :onBack="onBack" :headTitle="title"></headerBar>
    <div class="main">
      <template v-if="language != 'en'">
        <div class="language languageZh">
          <p class="emphasize-text">
            1.1欢迎使用Cannis应用程序（“平台”）。在使用我们的平台或开设Cannis账户之前，请阅读以下条款和条件（“条款和条件”），以便了解您与CannisappSdnBhd（“Cannis”，“我们”，“我们”或“Cannis”的合法权利和义务。“我们的”）。
          </p>
          <p class="emphasize-text">
            1.2通过访问平台，您确认您对这些条款和条件的理解和不可接受的接受并同意这些条款和条件，这些条款和条件与我们的隐私政策相关，即使CANNIS与您在此平台方面的关系。根据您所在国家/地区的适用法律（“法定年龄”），如果您未满18周岁或者根据本法律规定给予同意的法定年龄，您必须获得父母或法定监护人的许可才能开设帐户，并且该父母或法定监护人必须同意本协议的条款。如果您是创建帐户的未成年人的父母或法定监护人，您必须代表未成年人接受本条款和条件，并且您将负责使用此帐户对帐户或平台的所有使用，无论此帐户是否为当前帐户打开或稍后创建。如果您不同意这些条款和条件的任何部分，则您不得使用此平台。我们保留随时更改，修改，添加或删除本条款和条件部分内容的权利。更改将在平台上发布时生效，不提供其他通知。您在发布本条款和条件的更改后继续使用平台即表示您接受这些更改。
          </p>
          <p class="emphasize-text">
            1.3在我们的平台上注册帐户后，您将负责保护您的帐户信息，例如您的用户标识详细信息和密码。您对通过您的帐户进行的所有活动负全部责任。如果您发现任何未经授权使用您的帐户，请立即通知我们。
          </p>
          <h3>有限许可证</h3>
          <p>
            2.1为了在平台上使用服务，我们根据所述条款和条件授予您不可转让和可撤销的许可，以使用本平台。我们提供或提供的服务包括（a）平台，（b）平台提供的服务，以及（c）通过平台提供的任何材料或信息（“内容”）（统称为“服务”）。Cannis保留随时更改，修改，暂停或终止本平台或我们服务的全部或任何部分的权利。添加到平台的任何功能均受本条款和条件的约束。除非事先明确许可，否则禁止代表任何第三方进行商业用途或使用。任何违反本条款和条件的行为都将导致立即撤销本段中授予的许可，恕不另行通知。
          </p>
          <p>
            2.2平台中所有专有内容，知识产权，无论是已注册还是未注册，平台上的信息内容以及平台的所有设计，包括但不限于文本，图形，软件，照片，视频，音乐，声音，以及他们的选择和安排，以及所有软件编译，基础源代码和软件仍属于Cannis（“知识产权”）的财产。根据马来西亚版权法和国际公约，平台的全部内容也受版权保护，作为集体作品。保留所有权利。
          </p>
          <p>
            2.3使用或访问平台即表示您同意遵守版权，商标，服务标记以及保护平台，服务及其内容的所有其他适用法律。您同意不复制，分发，重新发布，传输，公开展示，公开执行，修改，改编，出租，出售或创建平台，服务或其内容的任何部分的衍生作品。未经我们事先书面同意，您也不得在任何其他服务器上或作为任何其他网站的一部分镜像或框架本平台的任何部分或全部内容。此外，您同意在未经我们事先书面同意的情况下，您不会使用任何机器人，蜘蛛或任何其他自动设备或手动过程来监控或复制我们的内容（对于互联网搜索网站使用的标准搜索引擎技术，我们同意这种同意）将互联网用户引导到我们的平台）。
          </p>
          <h3>服务和交易</h3>
          <p>
            3.1服务包括在线平台服务，提供与其他用户互动，进行直播，观看直播视频广播和在线购物的场所。该平台还为用户提供服务，如销售虚拟礼品，技术和软件支持，流量支持。
          </p>
          <p>
            3.2关于我们平台上的虚拟礼品服务，您同意并接受一旦您支付了虚拟代币并且平台已成功将该平台发给您的帐户，则无法将其转移给其他人，退回，或在任何情况下兑换成任何法定货币。
          </p>
          <p>
            3.3对于商家（“商家”）和购买者（“购买者”）（统称为“您”或“用户”）之间的所有商品销售，销售的实际合同是在商家之间购买者和CANNIS不是商家和购买者之间的任何其他合同的一方，并且不承担任何与此类合同相关的义务。用户进入此类交易将完全负责他们之间的销售合同，商品上市，购买保修等。Cannis可能会或可能不会预先筛选用户或用户提供的内容，并保留删除您在平台上发布的任何内容的权利。Cannis无法确保用户完成交易。此平台上的商家也将遵守我们的商家用户协议。
          </p>
          <p>
            3.4您同意商家和买方有责任确定商家或买方因购买而可能欠下的销售额，使用费或其他税（例如销售税2018年的销售税）。该平台。商家有责任收集，报告和汇出适用法律要求的任何销售，使用或其他税费。您同意（a）Cannis没有责任收集，报告或汇出与您的销售和/或购买相关的销售，使用或任何其他适用的税收，以及（b）完全赔偿，保护和保持Cannis无害以任何与上述相关的方式，从任何和所有索赔，要求，损害赔偿，奖励，罚款，成本，费用和责任。
          </p>
          <p>
            3.5买方还同意为购买的任何产品全额支付所有运费，并同意支付可能对产品征收的所有进口税，关税和/或费用。Cannis不承担责任，Cannis也不控制每个目的地国家征收的税款，关税或费用的金额或时间。如有任何相关问题，建议您联系当地海关官员。
          </p>
          <p>
            3.6订单下达平台后，商家将处理订单流程的所有方面。Cannis不会修改或取消买方的任何订单，包括运输信息的任何变更。买方需要通过我们的平台联系商家进行任何修改或取消。
          </p>
          <p>
            3.7如果您没有收到产品或收到的产品有缺陷，损坏或与平台上商家发布的描述不符，您必须直接通过平台联系商家以尝试解决问题。商家的联系信息可以在您的帐户中的订单详细信息中找到，也可以在发送给您的确认订单的电子邮件中找到。Cannis不会代表您调解纠纷或解决问题。
          </p>
          <p>
            3.8您了解由于某些更新或修复工作或由于不归因于Cannis的故障，可能会暂停或中断对平台的访问。对于任何此类情况的任何损失，损害或取消的交易，Cannis概不负责。
          </p>
          <p>3.9如果您位于我们经批准的某个国家/地区，您可能只会使用此平台和/或在此平台下开立帐户，并且不时更新。</p>
          <p>服务许可的范围：</p>
          <p>
            我们给予用户一项个人的、不可转让及非排他性的许可，以使用本软件。用户可以为非商业目的在单一台终端设备上安装、使用、显示、运行本软件。
            本条及本协议其他条款未明示授权的其他一切权利仍由我们保留，用户在行使这些权利时须另外取得我们的书面许可。我们如果未行使前述任何权利，并不构成对该权利的放弃。
          </p>
          <h3>隐私</h3>
          <p>
            4.1如我们的隐私政策中有更全面的描述，您必须披露某些个人身份信息（“信息”）才能使用我们的平台，注册和购买。作为在我们的平台注册的条件，您声明您应向Cannis提供真实，准确和完整的信息，并且如果有任何更改，我们将继续更新您的帐户信息。您还表示您已阅读我们的隐私政策，并同意我们的隐私政策中所述的信息的收集，使用和披露。我们的隐私政策的条款和条件将不时更改，作为继续使用平台的条件，使用平台的任何功能或进行任何购买，您同意您已阅读并同意我们的隐私政策，包括任何其修正案。
          </p>
          <p>
            4.2您承认，同意并同意CANNIS可以使用您的姓名（包括但不限于您的真实姓名，NICKNAME或任何识别您的姓名），您的简介图片以及与您有关的其他信息，与ADS相关或与之相关，我们在平台上展示的优惠和其他内容，与我们的合作伙伴分享这些内容和/或广告和销售我们的平台，无需任何赔偿。
          </p>
          <p>4.3 Cannis不会向任何第三方披露或提供您的个人信息或存储在我们平台上的任何非公开内容，除非：</p>
          <p>4.3.1符合本条款和条件;</p>
          <p>4.3.2您事先同意并授权此类披露;</p>
          <p>4.3.3相关法律要求我们或按照当局的要求;</p>
          <p>4.3.4第三方同意承担与Cannis相同的责任来保护您的信息;要么</p>
          <p>4.3.5披露是平台认为适当的，并且不受法律禁止。</p>
          <p>
            4.4您（如果适用，作为买方）也承认，同意并同意Cannis可以向商家提供商家向您发送产品所需的信息，并就此类货物和可能出现的任何问题与您进行沟通与您的购买有关。此信息包括但不限于您的“送货地址”信息和您的电子邮件地址。您（如果适用，作为商家），确认，同意并同意Cannis可以向买方提供合理必要的信息，以便买方就您购买产品与您联系并就此类货物与您进行沟通。与购买有关的问题。此信息包括但不限于您的电子邮件地址。
          </p>
          <p>
            4.5您在此同意Cannis对于根据本条款和条件的规定，特别是本节4的规定披露信息，或收集，使用或披露信息不承担任何责任，义务或责任。您可以在使用平台时访问有关其他用户的某些信息。您在此声明，保证并同意（a）不使用可从平台访问或Cannis可能向您披露的其他用户的任何信息，除非在平台上输入和完成交易，并且（b）不使用任何此类信息用于招揽，发送未经请求的电子邮件或垃圾邮件，骚扰或其他行为Cannis认为不可接受或令人反感。
          </p>
          <p>
            4.6虽然Cannis采取积极合理的措施来保护和防止未经授权访问您的信息，但我们不对未经授权访问的人员的行为负责，我们不做任何明示，暗示或其他保证，我们将阻止未经授权访问您的信息。在任何情况下，Cannis或我们的关联公司均不对因第三方未经授权访问您的信息而产生或以任何方式与之相关的任何损害（无论是间接的，直接的，偶然的，间接的，惩罚性的，特殊的或其他的）承担责任。这些损害赔偿是基于合同，严格责任，侵权或其他责任理论，而且无论Cannis是否得到实际或建设性的通知，表明损害是可能的。
          </p>
          <p>
            4.7您承认您应对您在平台上发布或发布或传输的内容负责，并且您将小心不要透露您自己的个人详细信息（例如任何银行信息，信用卡或借记卡详细信息，第三方支付账户和使用平台时的密码等（除非为平台上销售的产品或平台上的代币通过平台支付此类详细信息，此类信息应通过工业处理和保护
            - 领先的加密标准），由您造成的任何损失应由您自行承担。
          </p>
          <h3>法律和司法管辖权</h3>
          <p>5.1使用平台时，无论是作为用户，商家还是购买者，您同意遵守以下规定：</p>
          <p>5.1.1遵守马来西亚的所有法律法规（“法律”），包括但不限于与出口和限制，税收和第三方权利有关的法律;</p>
          <p>5.1.2不违反本条款和条件，隐私政策以及我们的商家用户协议（如适用）的文字或精神;</p>
          <p>5.1.3不得将平台服务用于任何非法，不正当或令人反感的目的;</p>
          <p>
            5.1.4不得使用平台服务上传，张贴，展示或传播或以其他方式提供任何令人痛苦，骚扰，曲折，诽谤，欺诈，辱骂，威胁，粗俗，淫秽或任何其他非法信息或材料;
          </p>
          <p>
            5.1.5不传播或发布任何煽动的内容：民族仇恨，民族歧视，抵抗当局的另一种，法律和行政法规的实施，国家权力的颠覆，分裂运动（这是一份非详尽的清单，我们将保留随时修改以遵守法律的权利）;
          </p>
          <p>5.1.6不得侵犯Cannis和/或任何第三方的知识产权，声誉或任何其他合法权利;</p>
          <p>5.1.7及时通知我们任何非法使用帐户和/或如果发现您或任何其他人的帐户存在安全漏洞;</p>
          <p>5.1.8使用服务冒充任何人或实体，或以其他方式歪曲您与某人或实体的关系;</p>
          <p>5.1.9操纵本平台上的任何内容;</p>
          <p>
            5.1.10尝试对服务（或其任何部分）进行反编译，反向工程，反汇编或黑客攻击，或者破坏或克服Cannis针对服务和/或传输，处理或存储的数据实施的任何加密技术或安全措施作者：Cannis;
          </p>
          <p>5.1.11收集或收集有关或与其他用户有关的任何信息，包括但不限于任何个人数据或信息;</p>
          <p>
            5.1.12上传，发布，传输或以其他方式提供您无权根据任何法律或合同或信托关系提供的任何内容（例如作为就业的一部分学习或披露的内部信息，专有和机密信息）关系或根据保密协议）;
          </p>
          <p>
            5.1.13上传，发布，传输或以其他方式提供任何包含软件病毒，蠕虫，特洛伊木马或任何其他旨在直接或间接干扰，操纵，中断，破坏或限制的计算机代码，例程，文件或程序的资料任何计算机软件或硬件或数据或电信设备的功能或完整性;
          </p>
          <p>
            5.1.14干扰，操纵或破坏与平台相连的服务或服务器或网络或任何其他用户使用和享受服务，或违反与平台相连的网络的任何要求，程序，政策或规定;和
          </p>
          <p>
            5.1.15使用服务有意或无意违反任何适用的地方，州，国家或国际法律，规则，准则，指令，指南，政策或法规，包括但不限于法律和要求（无论是否具有法律效力））与反洗钱或反恐有关。
          </p>
          <p>
            5.2本条款和条件应由马来西亚现行法律解释和管辖。根据以下仲裁条款，每位用户特此同意服从马来西亚政府法院的管辖权，并根据场地放弃任何异议。
          </p>
          <p>
            5.3由于本条款和条件引起的或与之相关的任何争议，索赔或争议，将通过私人和机密的约束性仲裁提交并最终通过在马来西亚以马来西亚法律管辖的单一仲裁员进行解决。仲裁员应是在马来西亚接受合法培训且独立于任何一方的人。尽管有上述规定，Cannis保留通过法院禁令或其他公平救济来保护知识产权和机密信息的权利。
          </p>
          <h3>付费服务</h3>
          <p>
            6.1平台可能会扩展到可能需要付款/订阅的服务。Cannis将在您使用此类服务之前向您提供明确的通知。如果您不想支付相关费用，Cannis将拒绝在平台上向您提供这些收费/订阅/付费服务。
          </p>
          <p>
            用户可自主设定账号名称、头像、简介等注册信息，但不得含有违法和不良信息；如存在该等情况，平台有权采取通知限期改正、暂停使用、注销账号等措施。
          </p>
          <h2>终止</h2>
          <p>
            7.1本条款和条件将继续适用于您，直至您或Cannis终止。但是，您承认并同意，您就通过您的帐户发布或上传的内容授予的永久许可是不可撤销的，因此将在本条款和条件到期或终止后因任何原因继续。
          </p>
          <p>
            7.2
            Cannis保留终止或拒绝让您访问本平台或服务的权利，或允许您以任何理由在Cannis下开设账户。Cannis对您或任何第三方终止或撤销您的帐户以及访问此平台不承担任何责任。
          </p>
          <p>
            7.3如果您通知Cannis（通过电子邮件，电子邮件地址为hello@cannis.app），您可以终止您的帐户。尽管有此终止，您仍应对使用您的帐户在平台上发布或通过平台显示的内容（无论是在终止请求之前或之后发布或显示），任何未完成的交易（无论是在此类请求之前或之后开始）承担责任。终止），产品发货，产品付款等，您必须根据本条款和条件执行并完成所有未完成的交易后与我们联系。Cannis不承担任何责任，也不对因根据本节采取的行动而导致的任何损害或损失承担责任。用户根据Cannis采取的行动放弃任何和所有索赔。
          </p>
          <h2>保证和陈述</h2>
          <p>
            8.1除非另有书面明确规定，否则Cannis不对本平台的操作以及本平台中包含的信息，内容，产品和服务做出任何明示或暗示的保证和陈述。
          </p>
          <h2>通用</h2>
          <p>
            9.1
            Cannis根据本条款和条件的任何延迟或失败均不构成Cannis对本条款和条件的任何规定的任何豁免。如果本条款和条件的任何条款在适用法律下无效或不可执行，则在此范围内，在可能的范围内，可视为可执行（并且在此类条款完全无法执行的情况下可分割）以及本条款的其余条款和条件将继续完全有效。本条款和条件将对Cannis的继承人和受让人的利益具有约束力。根据本条款和条件提出的任何索赔必须在诉讼因由产生后的一（1）年内提出。本条款和条件对您个人而言，不得转让，转让或委托给任何人。您转让，转让或委托本条款和条件的任何企图均属无效。Cannis可以在未经同意或通知的情况下自由转让本条款和条件。本条款和条件构成Cannis与您之间就本协议主题事项达成的完整且排他性的协议，并取代之前未明确纳入本协议的所有口头或书面谅解，通信或协议。
          </p>
          <p>
            9.2您同意赔偿，保护和保护Cannis及其任何父母，姊妹公司，子公司，关联公司，服务提供商，销售商，分销商，许可方，高级职员，董事和员工免受任何索赔或要求，包括合理的法律费用由任何第三方因违反本条款和条件的任何规定或您违反任何法律，法规或第三方权利而引起或与之相关的。
          </p>
        </div>
      </template>
      <template v-else>
        <div class="language languageEn">
          <p>
            1.1 Welcome to the Cannisapplication ("Platform"). Please read the following terms and conditions ("Terms
            and Conditions") before using our Platform or opening a Cannis account so you are aware of your legal rights
            and obligationswithCannisappSdnBhd (“Cannis”, “we”, “us” or “our”).
          </p>
          <p>
            1.2 BY ACCESSING THE PLATFORM, YOU CONFIRM YOUR UNDERSTANDING AND IRREVOCABLE ACCEPTANCE OF AND CONSENT TO
            THESE TERMS AND CONDITIONS, WHICH TOGETHER WITH OUR PRIVACY POLICY, GOVERN CANNIS’S RELATIONSHIP WITH YOU IN
            RELATION TO THIS PLATFORM. If you are under the age of 18 or the legal age for giving consent hereunder
            pursuant to the applicable laws in your country (the “Legal Age”), you must get permission from a parent or
            legal guardian to open an account and that parent or legal guardian must agree to the terms of this
            agreement. If you are the parent or legal guardian of a minor who is creating an account, you must accept
            this Terms and Conditions on the minor's behalf and you will be responsible for all use of the account or
            Platform using such account, whether such account is currently open or created later. IF YOU DO NOT AGREE TO
            ANY PART OF THESE TERMS AND CONDITIONS, YOU SHALL NOT USE THIS PLATFORM. We reserve the right, to change,
            modify, add, or remove portions of this Terms and Conditions at any time. Changes will be effective when
            posted on the Platform with no other notice provided. Your continued use of the Platform following the
            posting of changes to this Terms and Conditions constitutes your acceptance of those changes.
          </p>
          <p>
            1.3 Once you have registered for an account in our Platform, you will be responsible in safeguarding your
            account information such as your user identification details and password. You are fully responsible for all
            activities that occursvia your account. Please notify us immediately should you realise any unauthorised use
            of your account.
          </p>
          <h2>LIMITED LICENCE</h2>
          <p>
            2.1 We grant you a non-transferable and revocable licence to use this Platform, under the Terms and
            Conditions described, for the purposes of using the services on the Platform. The services we provide or
            make available include (a) the Platform, (b) the services provided by the Platform, and (c) any materials or
            information made available through the Platform (“Content”) (collectively known as “Services”). Cannis
            reserves the right to change, modify, suspend or discontinue all or any part of this Platform or our
            Services at any time. Any features added into the Platform are subject to this Terms and Conditions.
            Commercial use or use on behalf of any third party is prohibited, except as explicitly permitted by us in
            advance. Any breach of this Terms and Conditions shall result in the immediate revocation of the licence
            granted in this paragraph without notice to you.
          </p>
          <p>
            2.2 Allproprietary content, intellectual property, whether registered or unregistered, in the Platform,
            information content on the Platform and all the design of the Platform, including, but not limited to, text,
            graphics, software, photos, video, music, sound, and their selection and arrangement, and all software
            compilations, underlying source code and software shall remain the property of Cannis (“Intellectual
            Property”). The entire contents of the Platform also are protected by copyright as a collective work under
            the Malaysia’scopyright laws and international conventions. All rights are reserved.
          </p>
          <p>
            2.3 By using or accessing the Platform you agree to comply with the copyright, trademark, service mark, and
            all other applicable laws that protect the Platform, its Services and its Content. You agree not to copy,
            distribute, republish, transmit, publicly display, publicly perform, modify, adapt, rent, sell, or create
            derivative works of any portion of the Platform, its Services or its Content. You also may not, without our
            prior written consent, mirror or frame any part or whole of the Contents of this Platform on any other
            server or as part of any other website. In addition, you agree that you will not use any robot, spider or
            any other automatic device or manual process to monitor or copy our Content, without our prior written
            consent (such consent is deemed given for standard search engine technology employed by Internet search
            websites to direct Internet users to our Platform).
          </p>
          <h2>THE SERVICES AND TRANSACTIONS</h2>
          <p>
            3.1 The Services include an online platform service which provides a place to interact with other Users,
            conduct live broadcasts, watch live video broadcasts, and do online shopping. This Platform also provides
            Users with Services such as sale of virtual gifts, technical and software support, traffic support.
          </p>
          <p>
            3.2 In relation to the virtual gift services on our Platform, you agree and accept that once you have paid
            for the virtual token and it has been issued by the Platform to your account on the Platform successfully,
            it cannot be transferred to others, returned, or exchanged into any legal currency under any circumstances.
          </p>
          <p>
            3.3 For all the sale of goods between the merchants (“Merchant(s)”) and purchasers (“Purchaser(s)”)
            (collectively known as “you” or “Users”), THE ACTUAL CONTRACT OF SALE IS BETWEEN THE MERCHANT AND THE
            PURCHASER, AND CANNIS IS NOT A PARTY TO THAT OR ANY OTHER CONTRACT BETWEEN THE MERCHANT AND THE PURCHASER,
            AND ACCEPTS NO OBLIGATIONS IN CONNECTION WITH ANY SUCH CONTRACT. Users entrance into such transactions will
            be entirely responsible for the sales contract between them, the listing of goods, warranty of purchase and
            the likes. Cannis may or may not pre-screen Users or the Content provided by the Users, and reserves the
            right to remove any Content posted by you on the Platform. Cannis cannot ensure that Users will complete a
            transaction. Merchants on this Platform will also be subject to our Merchant User Agreement.
          </p>
          <p>
            3.4 You agree that the Merchant and the Purchaser are responsible for determining the amount of sales, use
            or other taxes (e.g. the sales tax under the Sales Tax 2018) that the Merchant or the Purchaser may owe as a
            result of purchase(s) on the Platform. The Merchant is responsible to collect, report and remit any sales,
            use or other taxes required under the applicable laws. You agree (a) that Cannis has no responsibility to
            collect, report or remit sales, use or any other applicable taxes in connection with your sales and/or
            purchase(s), and (b) to fully indemnify, defend and hold Cannis harmless from any and all claims, demands,
            damages, awards, fines, costs, expenses and liability in any way associated with the foregoing.
          </p>
          <p>
            3.5 The Purchaser also agree to pay all shipping charges in full for any product purchased and agree to pay
            all import taxes, custom duties and/or fees which may be imposed on the products. Cannis does not take
            responsibility nor does Cannis control the amount or timing of any taxes, duties or fees imposed by each
            destination countries. You are recommended to contact your local customs officials with any questions in
            relation to this.
          </p>
          <p>
            3.6 Once an order is placed on the Platform, the Merchant will be handling all aspects of the order process.
            Cannis will not amend or cancel any order made by the Purchaser, including any change in shipping
            information. The Purchaser will need to contact the Merchant through our Platform for any amendments or
            cancellations.
          </p>
          <p>
            3.7 If you do not receive your product or you have received a product that is defective, damaged, or that
            does not match the description posted by the Merchant on the Platform, you must contact the Merchant
            directly through the Platform to attempt to resolve the problem. The Merchant’s contact information can be
            found in your order detail located in your account or in the email sent to you confirming your order. Cannis
            will not mediate disputes, or resolve the matter on your behalf.
          </p>
          <p>
            3.7 You understand that access to the Platform might be halted or interrupted due to certain updating or
            repair works, or due to faults not attributable to Cannis. Cannis shall not be responsible for any losses,
            damages or cancelled transactions in relation to any such situations.
          </p>
          <p>
            3.8 You may only use this Platform and/or open an account under this Platform if you are located in one of
            our approved countries, as updated from time to time.
          </p>
          <h2>PRIVACY</h2>
          <p>
            4.1 As more fully described in our Privacy Policy, you must disclose certain personally identifiable
            information (“Information”) to use our Platform, register, and make purchases. As a condition of registering
            with our Platform, you represent that you shall provide true, accurate and complete Information to Cannis,
            and will continue to update your Information on your account should there be any changes. You also represent
            that you have read our Privacy Policy and consent to the collection, use and disclosure of your Information
            as described in our Privacy Policy. Our Privacy Policy's terms and conditions will change from time to time,
            and as a condition of the continued usage of the Platform, using any features of the Platform or making any
            purchase, you agree that you have read and agree to our Privacy Policy including any of its amendments.
          </p>
          <p>
            4.2 YOU ACKNOWLEDGE, CONSENT AND AGREE THAT CANNIS MAY USE YOUR NAME (INCLUDING BUT NOT LIMITED TO YOUR REAL
            NAME, NICKNAME, OR ANY NAMES IDENTIFYING YOU), YOUR PROFILE PICTURE AND OTHER INFORMATION RELATING TO YOU,
            NEXT TO OR IN CONNECTION WITH ADS, OFFERS AND OTHER CONTENT THAT WE DISPLAY ACROSS OUR PLATFORM, TO SHARE
            THESE WITH OUR PARTNERS AND/OR TO ADVERTISE AND MARKET OUR PLATFORM, WITHOUT ANY COMPENSATION TO YOU.
          </p>
          <p>
            4.3 Cannis will not disclose or provide your personal Information or any non-public content stored on our
            Platform to any third parties, except if:
          </p>
          <p>4.3.1 It is pursuant to this Terms and Conditions;</p>
          <p>4.3.2 You consent to and authorise such disclosure in advance;</p>
          <p>4.3.3 We are required by relevant Laws to do so or as requested by the authorities;</p>
          <p>
            4.3.4 The third party agrees to assume the same responsibility as Cannis to protect your Information; or
          </p>
          <p>4.3.5 The disclosure is such that the Platform deems appropriate and are not prohibited by the Laws.</p>
          <p>
            4.4 You (if applicable, as the Purchaser) also acknowledge, consent and agree that Cannis may provide
            Merchants with information that is reasonably necessary for the Merchants to ship the products to you and to
            communicate with you regarding such shipment and any issues that may arise in connection with your purchase.
            This information includes, but is not limited to, your "ship to" information and your email address. You (if
            applicable, as the Merchant), acknowledge, consent and agree that Cannis may provide the Purchasers with
            information that is reasonably necessary for the Purchasers to contact you regarding the purchase of
            products from you and to communicate with you regarding such shipment and any issues that may arise in
            connection with their purchase. This information includes, but is not limited to, your email address.
          </p>
          <p>
            4.5 You hereby agree that Cannis shall bear no responsibility, obligation or liability with respect to the
            disclosure of information to, or any collection, use or disclosure of information by, pursuant to the
            provisions of this Terms and Conditions, particularly this section 4.You may receive access to certain
            information concerning other Users when you use the Platform. You hereby represent, warrant and agree (a)
            not to use any information regarding other Users which is accessible from the Platform or that may be
            disclosed to you by Cannis, except to enter and complete transactions on the Platform, and (b) not to use
            any such information for purposes of solicitation, sending unsolicited email or spamming, harassment, or
            other conduct Cannis deems unacceptable or objectionable.
          </p>
          <p>
            4.6 While Cannis takes active and reasonable steps to safeguard and to prevent unauthorized access to your
            Information, we cannot be responsible for the acts of those who gain unauthorized access, and we make no
            warranty, express, implied, or otherwise, that we will prevent unauthorized access to your Information. In
            no event shall Cannis or our affiliates be liable for any damages (whether consequential, direct,
            incidental, indirect, punitive, special or otherwise) arising out of, or in any way connected with, a third
            party's unauthorized access to your Information, regardless of whether such damages are based on contract,
            strict liability, tort or other theories of liability, and also regardless of whether Cannis was given
            actual or constructive notice that damages were possible.
          </p>
          <p>
            4.7 You acknowledge that you shall be responsible for the content you post or publish or transmit on the
            Platform, and you will be careful to not disclose your own personal details (e.g. any banking information,
            credit or debit card details, third party payment accounts and passwords, etc) when using the Platform
            (unless such details are required for the purposes of making payment THROUGH THE PLATFORM for the products
            sold on the Platform or the tokens on the Platform, which such information shall be processed and protected
            by means of industry-leading encryption standards), and any losses caused by you shall be solely borne by
            you.
          </p>
          <h2>LAWS AND JURISDICTION</h2>
          <p>
            5.1 When using the Platform, whether as a User, Merchant, or Purchaser, you agree that you will abide to the
            below:
          </p>
          <p>
            5.1.1 complywith all laws and regulations of Malaysia (“Laws”), including but not limited to Laws in
            relation to export and restrictions, tax and third party rights;
          </p>
          <p>
            5.1.2 not violate the letter or spirit of this Terms and Conditions, the Privacy Policy, and if applicable,
            our Merchant User Agreement;
          </p>
          <p>5.1.3 not use the Platform’s Services for any illegal, improper or objectionable purposes;</p>
          <p>
            5.1.4 not upload, post, display or transmit or otherwise make available any distressing, harassing,
            tortuous, defamatory, fraudulent, abusive, threatening, vulgar, obscene or any other illegal information or
            materials using the Services of the Platform;
          </p>
          <p>
            5.1.5 not transmit or publish anything that incites: national hatred, ethnic discrimination, another to
            resist the authorities, the implementation of laws and administrative regulations, the subversion of state
            powers, separatist movements (this is a non-exhaustive list which we shall reserve the right to amend to
            comply with the Laws at any time);
          </p>
          <p>
            5.1.6 not infringe the Intellectual Property, reputation or any other legal rights of Cannis and/or any
            third parties;
          </p>
          <p>
            5.1.7 promptly inform us of any illegal use of account(s) and/or if there is found to be a security breach
            in you or any other person’s account;
          </p>
          <p>
            5.1.8 use the Services to impersonate any person or entity, or otherwise misrepresent your affiliation with
            a person or entity;
          </p>
          <p>5.1.9 manipulate any Content on this Platform;</p>
          <p>
            5.1.10 attempt to decompile, reverse engineer, disassemble or hack the Services (or any portion thereof), or
            to defeat or overcome any encryption technology or security measures implemented by Cannis with respect to
            the Services and/or data transmitted, processed or stored by Cannis;
          </p>
          <p>
            5.1.11 harvest or collect any information about or regarding other Users, including, without limitation, any
            personal data or information;
          </p>
          <p>
            5.1.12 upload, post, transmit or otherwise make available any Content that you do not have a right to make
            available under any law or under contractual or fiduciary relationships (such as inside information,
            proprietary and confidential information learned or disclosed as part of employment relationships or under
            nondisclosure agreements);
          </p>
          <p>
            5.1.13 upload, post, transmit or otherwise make available any material that contains software viruses,
            worms, Trojan-horses or any other computer code, routines, files or programs designed to directly or
            indirectly interfere with, manipulate, interrupt, destroy or limit the functionality or integrity of any
            computer software or hardware or data or telecommunications equipment;
          </p>
          <p>
            5.1.14 interfere with, manipulate or disrupt the Services or servers or networks connected to the Platform
            or any other User's use and enjoyment of the Services, or disobey any requirements, procedures, policies or
            regulations of networks connected to the Platform; and
          </p>
          <p>
            5.1.15 use the Services to intentionally or unintentionally violate any applicable local, state, national or
            international law, rule, code, directive, guideline, policy or regulation including, without limitation,
            laws and requirements (whether or not having the force of law) relating to anti-money laundering or
            counter-terrorism.
          </p>
          <p>
            5.2 This Terms and Conditions shall be interpreted and governed by the laws in force in Malaysia. Subject to
            the clause on arbitration below, each Users hereby agrees to submit to the jurisdiction of the courts of
            Government of Malaysia and to waive any objections based upon venue.
          </p>
          <p>
            5.3 Any controversy, claim or dispute arising out of or relating to this Terms and Conditions will be
            referred to and finally settled by private and confidential binding arbitration before a single arbitrator
            held in Malaysia in English and governed by Malaysian Laws. The arbitrator shall be a person who is legally
            trained in Malaysia and is independent of either party. Notwithstanding the foregoing, Cannis reserves the
            right to pursue the protection of Intellectual Property rights and confidential information through
            injunctive or other equitable relief through the courts.
          </p>
          <h2>PAID SERVICES</h2>
          <p>
            6.1 The Platform may expand to have services which may require payment/subscription. Cannis will provide you
            with clear notice before you may use such services. Should you not wish to pay the relevant fees, Cannis
            shall refuse to provide you with these fee-based/subscription/premium services in the Platform.
          </p>
          <h2>TERMINATION</h2>
          <p>
            7.1 This Terms and Conditions shall continue to apply to you until terminated by either you or Cannis.
            However, you acknowledge and agree that the perpetual licence granted by you in relation to the Content
            posted or uploaded by you through your account, is irrevocable and will therefore continue after expiry or
            termination of this Terms and Conditions for any reason.
          </p>
          <p>
            7.2 Cannis reserves the right to terminate or refuse to provide you access to this Platform or the Services
            or to allow you to open an account under Cannis for any reason. Cannis shall not be liable to you or any
            third party for the termination or revocation of your account and access to this Platform.
          </p>
          <p>
            7.3 You may terminate your account if you notify Cannis (via email at helloinfo@cannis.app) of your desire
            to do so. Notwithstanding such termination, you shall remain responsible and liable for content posted on or
            showed through the Platform using your account (whether posted or shown prior to or after such request for
            termination), any incomplete transactions (whether commenced prior to or after such request for
            termination), shipment of the product, payment for the product, and the like, and you must contact us after
            you have carried out and completed all incomplete transactions according to this Terms and Conditions.
            Cannis shall bear no liability and shall not be liable for any damages or losses incurred due to the actions
            taken in accordance to this section. The Users waive any and all claims based on such action taken by
            Cannis.
          </p>
          <h2>WARRANTY AND REPRESENTATIONS</h2>
          <p>
            8.1 Unless otherwise expressly stated in writing, Cannis makes no warranties and representations of any
            kind, express or implied, regarding the operation of this Platform and the information, content, products
            and services contained on this Platform.
          </p>
          <h2>GENERAL</h2>
          <p>
            9.1 No delay or failure by Cannis to take action under this Terms and Conditions shall constitute any waiver
            by Cannis of any provision of this Terms and Conditions. If any provision of this Terms and Conditions is
            invalid or unenforceable under applicable laws, it is, to that extent, deemed enforceable to the fullest
            extent possible (and severable in the event such provision is completely unenforceable) and the remaining
            provisions of this Terms and Conditions will continue in full force and effect. This Terms and Conditions
            will bind and inure to the benefit of Cannis’s successors and assigns. Any claim under this Terms and
            Conditions must be brought within one (1) year after the cause of action arises. This Terms and Conditions
            is personal to you and may not be transferred, assigned or delegated to anyone. Any attempt by you to
            assign, transfer or delegate this Terms and Conditions shall be null and void. Cannis may freely assign this
            Terms and Conditions without consent or notice. This Terms and Conditions constitutes the complete and
            exclusive agreement between Cannis and you with respect to the subject matter hereof and supersedes all
            prior oral or written understandings, communications or agreements not specifically incorporated herein.
          </p>
          <p>
            9.2 You agree to indemnify, defend and hold harmless Cannis and any of its parents, sister companies,
            subsidiaries, affiliates, service providers, sellers, distributors, licensors, officers, directors and
            employees from any claim or demand, including reasonable legal fees, made by any third party arising out of
            or related to your violation of any provision of this Terms and Conditions, or your violation of any law,
            regulation or third-party right.
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
  name: 'Agreements',
  data() {
    return {}
  },
  mixins: [adapter],
  computed: {
    ...mapState(['app']),
    title() {
      return this.$t('title.agreements')
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
  .main {
    .language {
      .emphasize-text {
        color: #000;
      }
    }
  }
}
</style>
