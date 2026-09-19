import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl } from "@/components/sections/Contact";

describe("buildWhatsAppUrl", () => {
  it("uses the fallback sentence when the inputs are empty", () => {
    const url = buildWhatsAppUrl("", "");

    expect(url.startsWith("https://wa.me/254732049230?text=")).toBe(true);

    const decoded = decodeURIComponent(url.replace("https://wa.me/254732049230?text=", ""));
    expect(decoded).toContain("Hi Kelvin, my name is there.");
    expect(decoded).toContain("I'd like to discuss a project with you.");
  });

  it("URL-encodes special characters in name and message", () => {
    const url = buildWhatsAppUrl("Ana & José", "Need & can? / yes!");

    expect(url).toContain("https://wa.me/254732049230?text=");

    const encodedText = url.replace("https://wa.me/254732049230?text=", "");
    expect(encodedText).toBe(encodeURIComponent("Hi Kelvin, my name is Ana & José. Need & can? / yes!"));
  });

  it("always uses the expected WhatsApp prefix", () => {
    const url = buildWhatsAppUrl("Alice", "Project brief");
    expect(url.startsWith("https://wa.me/254732049230?text=")).toBe(true);
  });
});
