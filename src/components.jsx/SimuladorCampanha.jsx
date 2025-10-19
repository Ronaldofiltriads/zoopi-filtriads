import React, { useState } from 'react';

export default function SimuladorCampanha() {
  const [orcamento, setOrcamento] = useState(100);
  const [cpc, setCpc] = useState(1.5);
  const [ctr, setCtr] = useState(2);
  const [taxaConversao, setTaxaConversao] = useState(5);
  const [comissao, setComissao] = useState(50);

  const cliques = Math.floor(orcamento / cpc);
  const impressoes = Math.floor(cliques / (ctr / 100));
  const conversoes = Math.floor(cliques * (taxaConversao / 100));
  const receita = conversoes * comissao;
  const lucro = receita - orcamento;
  const roi = ((lucro) / orcamento) * 100;

  return (
    <div className="bg-gray-50 p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">📈 Simulador de Campanha</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Orçamento (R$)</label>
          <input
            type="number"
            value={orcamento}
            onChange={(e) => setOrcamento(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Custo por Clique (R$)</label>
          <input
            type="number"
            value={cpc}
            onChange={(e) => setCpc(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">CTR estimado (%)</label>
          <input
            type="number"
            value={ctr}
            onChange={(e) => setCtr(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Taxa de Conversão (%)</label>
          <input
            type="number"
            value={taxaConversao}
            onChange={(e) => setTaxaConversao(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Comissão por Venda (R$)</label>
          <input
            type="number"
            value={comissao}
            onChange={(e) => setComissao(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="bg-white border-t pt-4 mt-4 space-y-2 text-gray-700">
        <p><strong>Impressões estimadas:</strong> {impressoes.toLocaleString()}</p>
        <p><strong>Cliques:</strong> {cliques.toLocaleString()}</p>
        <p><strong>Conversões:</strong> {conversoes}</p>
        <p><strong>Receita estimada:</strong> R$ {receita.toFixed(2)}</p>
        <p><strong>Lucro líquido:</strong> R$ {lucro.toFixed(2)}</p>
        <p><strong>ROI:</strong> {roi.toFixed(2)}%</p>
      </div>
    </div>
  );
}