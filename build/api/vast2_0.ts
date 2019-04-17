/* tslint:disable: class-name object-literal-sort-keys */

///////////////////////////////////////////////////////
//  IMPORTANT: this file is generated, dont edit it
/////////

import VastElement from "../../src/vast-element";

class AdSystem_5 extends VastElement<InLine_4> {}
class AdTitle_6 extends VastElement<InLine_4> {}
class Description_7 extends VastElement<InLine_4> {}
class Survey_8 extends VastElement<InLine_4> {}
class Error_9 extends VastElement<InLine_4> {}
class Impression_10 extends VastElement<InLine_4> {}
class Duration_14 extends VastElement<Linear_13> {}
class Tracking_16 extends VastElement<TrackingEvents_15> {}
class TrackingEvents_15 extends VastElement<Linear_13> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_16 {
    const newElem = new Tracking_16(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_15 {
    return this.attachTracking(content, attributes).and();
  }
}
class AdParameters_17 extends VastElement<Linear_13> {}
class ClickThrough_19 extends VastElement<VideoClicks_18> {}
class ClickTracking_20 extends VastElement<VideoClicks_18> {}
class CustomClick_21 extends VastElement<VideoClicks_18> {}
class VideoClicks_18 extends VastElement<Linear_13> {
  public attachClickThrough(content: string): ClickThrough_19 {
    const newElem = new ClickThrough_19("ClickThrough", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content: string): VideoClicks_18 {
    return this.attachClickThrough(content).and();
  }
  public attachClickTracking(content: string): ClickTracking_20 {
    const newElem = new ClickTracking_20("ClickTracking", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string): VideoClicks_18 {
    return this.attachClickTracking(content).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_21 {
    const newElem = new CustomClick_21(
      "CustomClick",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_18 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class MediaFile_23 extends VastElement<MediaFiles_22> {}
class MediaFiles_22 extends VastElement<Linear_13> {
  public attachMediaFile(
    content: string,
    attributes: {
      id?: string;
      delivery: "progressive" | "streaming";
      type: string;
      bitrate?: string;
      width: string;
      height: string;
      scalable?: string;
      mantainAspectRatio?: string;
      apiFramework?: string;
    }
  ): MediaFile_23 {
    const newElem = new MediaFile_23(
      "MediaFile",
      this,
      {
        attrs: [
          "id",
          "delivery",
          "type",
          "bitrate",
          "width",
          "height",
          "scalable",
          "mantainAspectRatio",
          "apiFramework"
        ]
      },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addMediaFile(
    content: string,
    attributes: {
      id?: string;
      delivery: "progressive" | "streaming";
      type: string;
      bitrate?: string;
      width: string;
      height: string;
      scalable?: string;
      mantainAspectRatio?: string;
      apiFramework?: string;
    }
  ): MediaFiles_22 {
    return this.attachMediaFile(content, attributes).and();
  }
}
class Linear_13 extends VastElement<Creative_12> {
  public attachDuration(content: string): Duration_14 {
    const newElem = new Duration_14("Duration", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDuration(content: string): Linear_13 {
    return this.attachDuration(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_15 {
    const newElem = new TrackingEvents_15("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachAdParameters(content: string): AdParameters_17 {
    const newElem = new AdParameters_17("AdParameters", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): Linear_13 {
    return this.attachAdParameters(content).and();
  }
  public attachVideoClicks(): VideoClicks_18 {
    const newElem = new VideoClicks_18("VideoClicks", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachMediaFiles(): MediaFiles_22 {
    const newElem = new MediaFiles_22("MediaFiles", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_26 extends VastElement<Companion_25> {}
class IFrameResource_27 extends VastElement<Companion_25> {}
class HTMLResource_28 extends VastElement<Companion_25> {}
class Tracking_30 extends VastElement<TrackingEvents_29> {}
class TrackingEvents_29 extends VastElement<Companion_25> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_30 {
    const newElem = new Tracking_30(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): TrackingEvents_29 {
    return this.attachTracking(content, attributes).and();
  }
}
class CompanionClickThrough_31 extends VastElement<Companion_25> {}
class AltText_32 extends VastElement<Companion_25> {}
class AdParameters_33 extends VastElement<Companion_25> {}
class Companion_25 extends VastElement<CompanionAds_24> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_26 {
    const newElem = new StaticResource_26(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): Companion_25 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_27 {
    const newElem = new IFrameResource_27("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): Companion_25 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_28 {
    const newElem = new HTMLResource_28("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): Companion_25 {
    return this.attachHTMLResource(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_29 {
    const newElem = new TrackingEvents_29("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_31 {
    const newElem = new CompanionClickThrough_31(
      "CompanionClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): Companion_25 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachAltText(content: string): AltText_32 {
    const newElem = new AltText_32("AltText", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): Companion_25 {
    return this.attachAltText(content).and();
  }
  public attachAdParameters(content: string): AdParameters_33 {
    const newElem = new AdParameters_33("AdParameters", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): Companion_25 {
    return this.attachAdParameters(content).and();
  }
}
class CompanionAds_24 extends VastElement<Creative_12> {
  public attachCompanion(
    attributes: {
      id?: string;
      width: string;
      height: string;
      expandedWidth?: string;
      expandedHeight?: string;
      apiFramework?: string;
    } = {}
  ): Companion_25 {
    const newElem = new Companion_25(
      "Companion",
      this,
      {
        attrs: [
          "id",
          "width",
          "height",
          "expandedWidth",
          "expandedHeight",
          "apiFramework"
        ]
      },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_36 extends VastElement<NonLinear_35> {}
class IFrameResource_37 extends VastElement<NonLinear_35> {}
class HTMLResource_38 extends VastElement<NonLinear_35> {}
class NonLinear_35 extends VastElement<NonLinearAds_34> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_36 {
    const newElem = new StaticResource_36(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): NonLinear_35 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_37 {
    const newElem = new IFrameResource_37("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): NonLinear_35 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_38 {
    const newElem = new HTMLResource_38("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): NonLinear_35 {
    return this.attachHTMLResource(content).and();
  }
}
class Tracking_40 extends VastElement<TrackingEvents_39> {}
class TrackingEvents_39 extends VastElement<NonLinearAds_34> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_40 {
    const newElem = new Tracking_40(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_39 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearClickThrough_41 extends VastElement<NonLinearAds_34> {}
class AdParameters_42 extends VastElement<NonLinearAds_34> {}
class NonLinearAds_34 extends VastElement<Creative_12> {
  public attachNonLinear(
    attributes: {
      id?: string;
      width: string;
      height: string;
      expandedWidth?: string;
      expandedHeight?: string;
      scalable?: string;
      maintainAspectRatio?: string;
      minSuggestedDuration?: string;
      apiFramework?: string;
    } = {}
  ): NonLinear_35 {
    const newElem = new NonLinear_35(
      "NonLinear",
      this,
      {
        attrs: [
          "id",
          "width",
          "height",
          "expandedWidth",
          "expandedHeight",
          "scalable",
          "maintainAspectRatio",
          "minSuggestedDuration",
          "apiFramework"
        ]
      },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_39 {
    const newElem = new TrackingEvents_39("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearClickThrough(
    content: string
  ): NonLinearClickThrough_41 {
    const newElem = new NonLinearClickThrough_41(
      "NonLinearClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addNonLinearClickThrough(content: string): NonLinearAds_34 {
    return this.attachNonLinearClickThrough(content).and();
  }
  public attachAdParameters(content: string): AdParameters_42 {
    const newElem = new AdParameters_42("AdParameters", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): NonLinearAds_34 {
    return this.attachAdParameters(content).and();
  }
}
class Creative_12 extends VastElement<Creatives_11> {
  public attachLinear(): Linear_13 {
    const newElem = new Linear_13("Linear", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(): CompanionAds_24 {
    const newElem = new CompanionAds_24("CompanionAds", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_34 {
    const newElem = new NonLinearAds_34("NonLinearAds", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_11 extends VastElement<InLine_4> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
    } = {}
  ): Creative_12 {
    const newElem = new Creative_12(
      "Creative",
      this,
      { attrs: ["id", "sequence", "adID"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_44 extends VastElement<Extensions_43> {}
class Extensions_43 extends VastElement<InLine_4> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_44 {
    const newElem = new Extension_44(
      "Extension",
      this,
      { attrs: ["type"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extensions_43 {
    return this.attachExtension(content, attributes).and();
  }
}
class InLine_4 extends VastElement<Ad_3> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_5 {
    const newElem = new AdSystem_5(
      "AdSystem",
      this,
      { attrs: ["version"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): InLine_4 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachAdTitle(content: string): AdTitle_6 {
    const newElem = new AdTitle_6("AdTitle", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdTitle(content: string): InLine_4 {
    return this.attachAdTitle(content).and();
  }
  public attachDescription(content: string): Description_7 {
    const newElem = new Description_7("Description", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addDescription(content: string): InLine_4 {
    return this.attachDescription(content).and();
  }
  public attachSurvey(content: string): Survey_8 {
    const newElem = new Survey_8("Survey", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addSurvey(content: string): InLine_4 {
    return this.attachSurvey(content).and();
  }
  public attachError(content: string): Error_9 {
    const newElem = new Error_9("Error", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): InLine_4 {
    return this.attachError(content).and();
  }
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_10 {
    const newElem = new Impression_10(
      "Impression",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): InLine_4 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_11 {
    const newElem = new Creatives_11("Creatives", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_43 {
    const newElem = new Extensions_43("Extensions", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class AdSystem_46 extends VastElement<Wrapper_45> {}
class VASTAdTagURI_47 extends VastElement<Wrapper_45> {}
class Error_48 extends VastElement<Wrapper_45> {}
class Impression_49 extends VastElement<Wrapper_45> {}
class Tracking_54 extends VastElement<TrackingEvents_53> {}
class TrackingEvents_53 extends VastElement<Linear_52> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_54 {
    const newElem = new Tracking_54(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_53 {
    return this.attachTracking(content, attributes).and();
  }
}
class ClickThrough_56 extends VastElement<VideoClicks_55> {}
class ClickTracking_57 extends VastElement<VideoClicks_55> {}
class CustomClick_58 extends VastElement<VideoClicks_55> {}
class VideoClicks_55 extends VastElement<Linear_52> {
  public attachClickThrough(content: string): ClickThrough_56 {
    const newElem = new ClickThrough_56("ClickThrough", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickThrough(content: string): VideoClicks_55 {
    return this.attachClickThrough(content).and();
  }
  public attachClickTracking(content: string): ClickTracking_57 {
    const newElem = new ClickTracking_57("ClickTracking", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addClickTracking(content: string): VideoClicks_55 {
    return this.attachClickTracking(content).and();
  }
  public attachCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): CustomClick_58 {
    const newElem = new CustomClick_58(
      "CustomClick",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCustomClick(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): VideoClicks_55 {
    return this.attachCustomClick(content, attributes).and();
  }
}
class Linear_52 extends VastElement<Creative_51> {
  public attachTrackingEvents(): TrackingEvents_53 {
    const newElem = new TrackingEvents_53("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachVideoClicks(): VideoClicks_55 {
    const newElem = new VideoClicks_55("VideoClicks", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_61 extends VastElement<Companion_60> {}
class IFrameResource_62 extends VastElement<Companion_60> {}
class HTMLResource_63 extends VastElement<Companion_60> {}
class Tracking_65 extends VastElement<TrackingEvents_64> {}
class TrackingEvents_64 extends VastElement<Companion_60> {
  public attachTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): Tracking_65 {
    const newElem = new Tracking_65(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event: "creativeView";
    }
  ): TrackingEvents_64 {
    return this.attachTracking(content, attributes).and();
  }
}
class CompanionClickThrough_66 extends VastElement<Companion_60> {}
class AltText_67 extends VastElement<Companion_60> {}
class AdParameters_68 extends VastElement<Companion_60> {}
class Companion_60 extends VastElement<CompanionAds_59> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_61 {
    const newElem = new StaticResource_61(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): Companion_60 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_62 {
    const newElem = new IFrameResource_62("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): Companion_60 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_63 {
    const newElem = new HTMLResource_63("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): Companion_60 {
    return this.attachHTMLResource(content).and();
  }
  public attachTrackingEvents(): TrackingEvents_64 {
    const newElem = new TrackingEvents_64("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionClickThrough(
    content: string
  ): CompanionClickThrough_66 {
    const newElem = new CompanionClickThrough_66(
      "CompanionClickThrough",
      this,
      {},
      content
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addCompanionClickThrough(content: string): Companion_60 {
    return this.attachCompanionClickThrough(content).and();
  }
  public attachAltText(content: string): AltText_67 {
    const newElem = new AltText_67("AltText", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAltText(content: string): Companion_60 {
    return this.attachAltText(content).and();
  }
  public attachAdParameters(content: string): AdParameters_68 {
    const newElem = new AdParameters_68("AdParameters", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addAdParameters(content: string): Companion_60 {
    return this.attachAdParameters(content).and();
  }
}
class CompanionAds_59 extends VastElement<Creative_51> {
  public attachCompanion(
    attributes: {
      id?: string;
      width: string;
      height: string;
      expandedWidth?: string;
      expandedHeight?: string;
      apiFramework?: string;
    } = {}
  ): Companion_60 {
    const newElem = new Companion_60(
      "Companion",
      this,
      {
        attrs: [
          "id",
          "width",
          "height",
          "expandedWidth",
          "expandedHeight",
          "apiFramework"
        ]
      },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class StaticResource_71 extends VastElement<NonLinear_70> {}
class IFrameResource_72 extends VastElement<NonLinear_70> {}
class HTMLResource_73 extends VastElement<NonLinear_70> {}
class NonLinear_70 extends VastElement<NonLinearAds_69> {
  public attachStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): StaticResource_71 {
    const newElem = new StaticResource_71(
      "StaticResource",
      this,
      { attrs: ["creativeType"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addStaticResource(
    content: string,
    attributes: {
      creativeType:
        | "image/gif"
        | "image/jpeg"
        | "image/jpg"
        | "image/png"
        | "application/x-javascript"
        | "application/x-shockwave-flash";
    }
  ): NonLinear_70 {
    return this.attachStaticResource(content, attributes).and();
  }
  public attachIFrameResource(content: string): IFrameResource_72 {
    const newElem = new IFrameResource_72("IFrameResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addIFrameResource(content: string): NonLinear_70 {
    return this.attachIFrameResource(content).and();
  }
  public attachHTMLResource(content: string): HTMLResource_73 {
    const newElem = new HTMLResource_73("HTMLResource", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addHTMLResource(content: string): NonLinear_70 {
    return this.attachHTMLResource(content).and();
  }
}
class Tracking_75 extends VastElement<TrackingEvents_74> {}
class TrackingEvents_74 extends VastElement<NonLinearAds_69> {
  public attachTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): Tracking_75 {
    const newElem = new Tracking_75(
      "Tracking",
      this,
      { attrs: ["event"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addTracking(
    content: string,
    attributes: {
      event:
        | "creativeView"
        | "start"
        | "midpoint"
        | "firstQuartile"
        | "thirdQuartile"
        | "complete"
        | "mute"
        | "unmute"
        | "pause"
        | "rewind"
        | "resume"
        | "fullscreen"
        | "expand"
        | "collapse"
        | "acceptInvitation"
        | "close";
    }
  ): TrackingEvents_74 {
    return this.attachTracking(content, attributes).and();
  }
}
class NonLinearAds_69 extends VastElement<Creative_51> {
  public attachNonLinear(
    attributes: {
      id?: string;
      width: string;
      height: string;
      expandedWidth?: string;
      expandedHeight?: string;
      scalable?: string;
      maintainAspectRatio?: string;
      minSuggestedDuration?: string;
      apiFramework?: string;
    } = {}
  ): NonLinear_70 {
    const newElem = new NonLinear_70(
      "NonLinear",
      this,
      {
        attrs: [
          "id",
          "width",
          "height",
          "expandedWidth",
          "expandedHeight",
          "scalable",
          "maintainAspectRatio",
          "minSuggestedDuration",
          "apiFramework"
        ]
      },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public attachTrackingEvents(): TrackingEvents_74 {
    const newElem = new TrackingEvents_74("TrackingEvents", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Creative_51 extends VastElement<Creatives_50> {
  public attachLinear(): Linear_52 {
    const newElem = new Linear_52("Linear", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachCompanionAds(): CompanionAds_59 {
    const newElem = new CompanionAds_59("CompanionAds", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachNonLinearAds(): NonLinearAds_69 {
    const newElem = new NonLinearAds_69("NonLinearAds", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Creatives_50 extends VastElement<Wrapper_45> {
  public attachCreative(
    attributes: {
      id?: string;
      sequence?: string;
      adID?: string;
    } = {}
  ): Creative_51 {
    const newElem = new Creative_51(
      "Creative",
      this,
      { attrs: ["id", "sequence", "adID"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}
class Extension_77 extends VastElement<Extensions_76> {}
class Extensions_76 extends VastElement<Wrapper_45> {
  public attachExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extension_77 {
    const newElem = new Extension_77(
      "Extension",
      this,
      { attrs: ["type"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addExtension(
    content: string,
    attributes: {
      type?: string;
    } = {}
  ): Extensions_76 {
    return this.attachExtension(content, attributes).and();
  }
}
class Wrapper_45 extends VastElement<Ad_3> {
  public attachAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): AdSystem_46 {
    const newElem = new AdSystem_46(
      "AdSystem",
      this,
      { attrs: ["version"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addAdSystem(
    content: string,
    attributes: {
      version?: string;
    } = {}
  ): Wrapper_45 {
    return this.attachAdSystem(content, attributes).and();
  }
  public attachVASTAdTagURI(content: string): VASTAdTagURI_47 {
    const newElem = new VASTAdTagURI_47("VASTAdTagURI", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addVASTAdTagURI(content: string): Wrapper_45 {
    return this.attachVASTAdTagURI(content).and();
  }
  public attachError(content: string): Error_48 {
    const newElem = new Error_48("Error", this, {}, content);
    this.childs.push(newElem);
    return newElem;
  }
  public addError(content: string): Wrapper_45 {
    return this.attachError(content).and();
  }
  public attachImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Impression_49 {
    const newElem = new Impression_49(
      "Impression",
      this,
      { attrs: ["id"] },
      content,
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
  public addImpression(
    content: string,
    attributes: {
      id?: string;
    } = {}
  ): Wrapper_45 {
    return this.attachImpression(content, attributes).and();
  }
  public attachCreatives(): Creatives_50 {
    const newElem = new Creatives_50("Creatives", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachExtensions(): Extensions_76 {
    const newElem = new Extensions_76("Extensions", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class Ad_3 extends VastElement<VAST_2> {
  public attachInLine(): InLine_4 {
    const newElem = new InLine_4("InLine", this, {});
    this.childs.push(newElem);
    return newElem;
  }
  public attachWrapper(): Wrapper_45 {
    const newElem = new Wrapper_45("Wrapper", this, {});
    this.childs.push(newElem);
    return newElem;
  }
}
class VAST_2 extends VastElement<apiv2> {
  public attachAd(
    attributes: {
      id: string;
    } = {}
  ): Ad_3 {
    const newElem = new Ad_3("Ad", this, { attrs: ["id"] }, attributes);
    this.childs.push(newElem);
    return newElem;
  }
}
class apiv2 extends VastElement<apiv2> {
  public attachVAST(attributes: { version: "2.0" }): VAST_2 {
    const newElem = new VAST_2(
      "VAST",
      this,
      { attrs: ["version"] },
      attributes
    );
    this.childs.push(newElem);
    return newElem;
  }
}

export { apiv2 };
