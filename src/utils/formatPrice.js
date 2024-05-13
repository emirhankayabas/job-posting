const formatPrice = (price, locale = "tr-TR") => {
  if (price == null) {
    return "";
  }

  if (typeof price === "string" && !isNaN(price)) {
    price = parseFloat(price);
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: locale === "en-US" ? "USD" : "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let formattedPrice = formatter.format(price);

  if (locale === "en-US") {
    formattedPrice = "$" + formattedPrice;
  } else {
    formattedPrice += " TL";
  }

  return formattedPrice;
};

export default formatPrice;
