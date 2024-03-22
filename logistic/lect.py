from PyPDF2 import PdfReader

reader = PdfReader("imile.pdf")
x=0
#readpdf = reader
# page= reader.pages[1]
while x < 87:
    if(x %2) != 0:
        page = reader.pages[x]
        sku = page.extract_text().split('/')
        total=sku[-1].split('TOTAIS')
        print(sku[1]+'  ' +total[1][0])
        
        # print(total[1][0])
        print('******************************************************')
    x+=1