img = 60;
x = mod(img-1,6);
y = floor((img-1)/6);
w = 153;
h = 153;
ind = [9 8 8 8 7 7];
t = 161*x + ind(x+1);
l = 160*y + 0;
comando = sprintf('convert simbolos_adinkra.jpg -crop %dx%d+%d+%d adinkra%02d.jpg',...
                    w,h,t,l,img);
system(comando)

name = sprintf('adinkra%02d.jpg',img);
I = imread(name);
imshow(I)
