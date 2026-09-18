import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

BOLD_FONT_CANDIDATES = [
    # macOS
    '/System/Library/Fonts/Supplemental/Arial Bold.ttf',
    '/Library/Fonts/Arial Bold.ttf',
    '/System/Library/Fonts/Helvetica.ttc',
    # Linux (Debian, Ubuntu, Alpine, Fedora, RedHat)
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
    '/usr/share/fonts/truetype/freefont/FreeSansBold.ttf',
    '/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/liberation-sans/LiberationSans-Bold.ttf',
    '/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf',
]

REGULAR_FONT_CANDIDATES = [
    # macOS
    '/System/Library/Fonts/Supplemental/Arial.ttf',
    '/Library/Fonts/Arial.ttf',
    '/System/Library/Fonts/Helvetica.ttc',
    # Linux (Debian, Ubuntu, Alpine, Fedora, RedHat)
    '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf',
    '/usr/share/fonts/truetype/freefont/FreeSans.ttf',
    '/usr/share/fonts/dejavu/DejaVuSans.ttf',
    '/usr/share/fonts/liberation-sans/LiberationSans-Regular.ttf',
    '/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf',
]

def load_font(candidates, size):
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    try:
        return ImageFont.load_default(size=size)
    except TypeError:
        return ImageFont.load_default()

def create_og_image(
    output_path,
    bg_image_path,
    badge_text,
    title_text,
    subtitle_text,
    location_text,
    accent_color=(107, 20, 24) # #6B1418 Burgundy
):
    width, height = 1200, 630
    canvas = Image.new('RGB', (width, height), color=(27, 29, 32)) # #1B1D20

    # Load and process right-side hero image
    if os.path.exists(bg_image_path):
        hero_img = Image.open(bg_image_path).convert('RGB')
        # Scale to fill right portion
        target_w = 700
        aspect = hero_img.height / hero_img.width
        scaled_h = int(target_w * aspect)
        if scaled_h < height:
            scaled_h = height
            target_w = int(scaled_h / aspect)
        hero_resized = hero_img.resize((target_w, scaled_h), Image.Resampling.LANCZOS)
        # Crop center
        crop_top = (scaled_h - height) // 2
        hero_cropped = hero_resized.crop((0, crop_top, target_w, crop_top + height))
        
        # Paste on right
        paste_x = width - target_w

        # Create smooth gradient fade from left dark background into right image
        fade_mask = Image.new('L', (target_w, height), color=0)
        mask_draw = ImageDraw.Draw(fade_mask)
        fade_width = 300
        for x in range(fade_width):
            alpha = int(255 * (x / fade_width))
            mask_draw.line([(x, 0), (x, height)], fill=alpha)
        mask_draw.rectangle([fade_width, 0, target_w, height], fill=255)
        
        # Blend with canvas
        canvas.paste(hero_cropped, (paste_x, 0), fade_mask)

    # Darken slightly for high contrast
    canvas.paste(Image.blend(canvas, Image.new('RGB', (width, height), (15, 17, 20)), 0.35), (0, 0))

    # Add left border accent line
    draw = ImageDraw.Draw(canvas)
    draw.rectangle([0, 0, 10, height], fill=accent_color)

    # Load Bumex Logo if available
    logo_path = 'public/logo.png'
    if os.path.exists(logo_path):
        logo = Image.open(logo_path).convert('RGBA')
        logo = logo.resize((100, 100), Image.Resampling.LANCZOS)
        canvas.paste(logo, (70, 70), logo)

    # Fonts
    font_badge = load_font(BOLD_FONT_CANDIDATES, 20)
    font_title = load_font(BOLD_FONT_CANDIDATES, 46)
    font_subtitle = load_font(REGULAR_FONT_CANDIDATES, 24)
    font_meta = load_font(BOLD_FONT_CANDIDATES, 20)

    # Draw Badge
    badge_x, badge_y = 190, 80
    draw.rectangle([badge_x, badge_y, badge_x + 280, badge_y + 36], fill=(45, 49, 56))
    draw.rectangle([badge_x, badge_y, badge_x + 6, badge_y + 36], fill=accent_color)
    draw.text((badge_x + 18, badge_y + 7), badge_text, font=font_badge, fill=(240, 240, 240))

    # Draw Title (multi-line)
    draw.text((70, 200), title_text, font=font_title, fill=(255, 255, 255))

    # Draw Subtitle
    draw.text((70, 340), subtitle_text, font=font_subtitle, fill=(180, 185, 192))

    # Bottom Tag / Location Pill
    draw.line([(70, 480), (600, 480)], fill=(60, 65, 72), width=1)
    draw.text((70, 510), location_text, font=font_meta, fill=(210, 215, 220))

    # Save as progressive JPEG
    canvas.save(output_path, 'JPEG', quality=95, optimize=True)
    print(f"Generated {output_path}: {canvas.size}")

# 1. Generate Main Homepage OG image
create_og_image(
    output_path='public/og-image.jpg',
    bg_image_path='public/images/hero/hero_navy_water_shear.jpg',
    badge_text='BUMEX GARAGE ANKARA',
    title_text='Mikron Boya Restorasyonu\n& 9H Nano Seramik Zırh',
    subtitle_text='Bahçelievler 7. Cadde\'ye 350m: Fabrika verniğini\nkoruyan dijital mikron analizi, dielektrik buharlı\nmotor temizliği ve 24/7 güvenli kapalı otopark.',
    location_text='📍 Prof. Muammer Aksoy Cad. No: 48, Bahçelievler'
)

# 2. Generate Otopark OG image
create_og_image(
    output_path='public/og-otopark.jpg',
    bg_image_path='public/images/hero/hero_bumex_ceramic.jpg',
    badge_text='7. CADDE KAPALI OTOPARK',
    title_text='24/7 Güvenli Kapalı Otopark\n& Park and Wash Hizmeti',
    subtitle_text='Bahçelievler 7. Cadde\'ye 350m yürüme mesafesinde;\n24 saat CCTV kameralı, dolu ve hava korumalı,\nalçak spor araç ve SUV rampalı kapalı tesis.',
    location_text='🅿️ 7. Cadde 350m • Park & Wash • 24/7 CCTV Kamera'
)
