import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {}, // não atualiza se já existir
    create: {
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      type: 'DOADOR', // isso depende do seu enum ou string
    },
  });

  console.log('Usuário admin criado:', admin);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('Erro ao criar seed:', e);
    prisma.$disconnect();
    process.exit(1);
  });
