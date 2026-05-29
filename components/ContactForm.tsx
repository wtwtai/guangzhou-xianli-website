"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";

export type ContactField = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  fullWidth?: boolean;
};

type FormValues = Record<string, string>;

const defaultFields: ContactField[] = [
  { name: "name", label: "姓名", required: true, placeholder: "请输入姓名" },
  { name: "company", label: "公司名称", required: true, placeholder: "请输入公司名称" },
  { name: "contact", label: "手机/微信", required: true, placeholder: "请输入手机号或微信号" },
  { name: "region", label: "所在地区", required: true, placeholder: "例如：广东广州" },
  {
    name: "product",
    label: "感兴趣产品",
    type: "select",
    required: true,
    options: ["专业背景纸", "精品包装纸", "特种卡纸", "文具封面纸", "多品类组合"],
  },
  {
    name: "cooperation",
    label: "合作类型",
    type: "select",
    required: true,
    options: ["渠道合作", "批发采购", "OEM/ODM 定制", "样品申请", "认证资料索取"],
  },
  {
    name: "message",
    label: "留言",
    type: "textarea",
    placeholder: "请简单说明您的需求",
    fullWidth: true,
  },
];

async function submitLead(payload: FormValues) {
  void payload;
  return { ok: true };
}

export function ContactForm({
  fields = defaultFields,
  submitLabel = "提交信息",
  successMessage = "已收到您的信息，我们会尽快与您联系。",
}: {
  fields?: ContactField[];
  submitLabel?: string;
  successMessage?: string;
}) {
  const initialValues = useMemo(
    () =>
      fields.reduce<FormValues>((values, field) => {
        values[field.name] = "";
        return values;
      }, {}),
    [fields],
  );
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormValues>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function updateValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormValues = {};

    fields.forEach((field) => {
      if (field.required && !values[field.name]?.trim()) {
        nextErrors[field.name] = `请填写${field.label}`;
      }
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    const result = await submitLead(values);

    if (result.ok) {
      setStatus("success");
      setValues(initialValues);
    } else {
      setStatus("idle");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="subtle-shadow grid gap-5 rounded-lg border border-[#D6B46A]/20 bg-[#0E0C09] p-5 sm:grid-cols-2 sm:p-6"
      noValidate
    >
      {fields.map((field) => {
        const id = `contact-${field.name}`;
        const fieldClass = field.fullWidth ? "sm:col-span-2" : "";

        return (
          <div key={field.name} className={fieldClass}>
            <label htmlFor={id} className="text-sm font-semibold text-[#D6B46A]">
              {field.label}
              {field.required ? <span className="text-[#F3EBDD]"> *</span> : null}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={id}
                value={values[field.name]}
                onChange={(event) => updateValue(field.name, event.target.value)}
                placeholder={field.placeholder}
                rows={4}
                aria-invalid={Boolean(errors[field.name])}
                className="mt-2 w-full rounded-md border border-[#D6B46A]/25 bg-[#0F0D0A] px-3 py-2.5 text-sm text-[#F3EBDD] transition placeholder:text-[#8F8678] focus:border-[#D6B46A] focus:ring-2 focus:ring-[#D6B46A]/15"
              />
            ) : field.type === "select" ? (
              <select
                id={id}
                value={values[field.name]}
                onChange={(event) => updateValue(field.name, event.target.value)}
                aria-invalid={Boolean(errors[field.name])}
                className="mt-2 w-full rounded-md border border-[#D6B46A]/25 bg-[#0F0D0A] px-3 py-2.5 text-sm text-[#F3EBDD] transition focus:border-[#D6B46A] focus:ring-2 focus:ring-[#D6B46A]/15"
              >
                <option value="">请选择</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                value={values[field.name]}
                onChange={(event) => updateValue(field.name, event.target.value)}
                placeholder={field.placeholder}
                aria-invalid={Boolean(errors[field.name])}
                className="mt-2 w-full rounded-md border border-[#D6B46A]/25 bg-[#0F0D0A] px-3 py-2.5 text-sm text-[#F3EBDD] transition placeholder:text-[#8F8678] focus:border-[#D6B46A] focus:ring-2 focus:ring-[#D6B46A]/15"
              />
            )}
            {errors[field.name] ? (
              <p className="mt-1.5 text-xs text-red-600">{errors[field.name]}</p>
            ) : null}
          </div>
        );
      })}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#D6B46A] px-5 py-3 text-sm font-semibold text-[#050505] transition hover:bg-[#B8913E] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "提交中..." : submitLabel}
          <Send className="size-4" aria-hidden="true" />
        </button>
        {status === "success" ? (
          <p className="mt-4 rounded-md border border-[#D6B46A]/25 bg-[#D6B46A]/10 px-4 py-3 text-sm font-medium text-[#D6B46A]">
            {successMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
